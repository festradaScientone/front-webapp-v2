"use client"; 
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote, SuggestionMenuController, getDefaultReactSlashMenuItems, } from "@blocknote/react";
import { BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems, insertOrUpdateBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import "./styles/index.css";

//Icons
import { Image, FileQuestion, Map } from "lucide-react";

//Blocks
import { FaqEditor } from "./components/FAQ";
import { GalleryEditor } from "./components/Gallery";
/* import { MapEditor } from "./components/Map"; */

import "./styles/faq.css";

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    faq: FaqEditor,
    gallery: GalleryEditor,
    //map: MapEditor,  
  },
});

export default function Editor({ initialData }) {
  const onChange = (content) => {
    console.log("update document content");
  };

  const hadleUpload = async (file) => {
    return "url";
  };

  const parsedContent = initialData;

  const insertFaq = (editor) => ({
    title: "Frecuent Questions",

    onItemClick: () => {
      insertOrUpdateBlock(editor, {
        type: "faq",
      });
    },
    group: "Others",
    subtext: "Insert Frequently Asked Questions.",
    icon: <FileQuestion size={18} />,
  });
  const insertGallery = (editor) => ({
    title: "Gallery of images",

    onItemClick: () => {
      insertOrUpdateBlock(editor, {
        type: "gallery",
      });
    },
    group: "Others",
    subtext: "Insert a group of images.",
    icon: <Image size={18} />,
  });
/*   const insertMap = (editor) => ({
    title: "Ubication",

    onItemClick: () => {
      insertOrUpdateBlock(editor, {
        type: "map",
      });
    },
    group: "Others",
    subtext: "Insert map.",
    icon: <Map size={18} />,
  }); */

  const editor = useCreateBlockNote({
    schema,
    initialContent: parsedContent,
  });

  // Renders the editor instance using a React component.
  return (
    <div className="md:max-w-3xl lg:max-w-7xl mx-auto pb-20 pt-12 px-4 min-h-[46rem]">
      <BlockNoteView 
        data-theming-css-variables-demo
        editor={editor} 
        onChange={onChange} 
        slashMenu={false}
        theme={"light"}
      > 
      <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) =>           
            filterSuggestionItems(
              [
                ...getDefaultReactSlashMenuItems(editor),
                insertFaq(editor),
                insertGallery(editor),            
              ],
              query
            )
          }
        />
      </BlockNoteView>
    </div>
  );
}
