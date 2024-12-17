import Image from "next/image";

export default function Logo() {
  const styles = {
    logo: {
      display: "flex",
      alignItems: "center",
    },
    sphere: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      marginRight: "10px",
      flexShrink: 0,
      borderRadius: "8px",
      background: "#000021",
    },
  };

  return (
    <>
      <div style={styles.logo}>
        <div style={styles.sphere}>
          <Image src="/img/logo/sphere.gif" unoptimized alt="Sphere" width="30" height="30" />
        </div>
        <div className="letters">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="32"
            viewBox="0 0 50 32"
            fill="none"
          >
            <path
              d="M22.4996 19.6822C22.4996 20.2959 22.4996 20.9534 22.4541 21.3041H4.60012C4.69121 25.0301 6.9685 28.4931 11.5686 28.4931C15.6677 28.4931 17.2618 25.9507 17.6718 24.4603H22.2263C20.9966 28.7562 17.5807 32 11.4775 32C4.09912 32 0 26.9589 0 20.1205C0 13.1068 4.37239 8.28493 11.4775 8.28493C18.5371 8.28493 22.4996 12.7562 22.4996 19.6822ZM4.60012 17.9288H17.8539C17.8539 14.4219 15.3034 11.7918 11.3409 11.7918C7.60614 11.7918 4.8734 14.2466 4.60012 17.9288Z"
              fill="#000021"
            />
            <path
              d="M30.7334 31.3425H26.2699V0H30.7334V31.3425Z"
              fill="#000021"
            />
            <path
              d="M40.2073 31.3425H35.7438V0H40.2073V31.3425Z"
              fill="#000021"
            />
            <path
              d="M50 4.99726H44.9444V0.350686H50V4.99726ZM49.6812 31.3425H45.2177V8.9863H49.6812V31.3425Z"
              fill="#000021"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
