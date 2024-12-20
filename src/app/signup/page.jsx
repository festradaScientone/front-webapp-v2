"use client";
import React, { useState } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Separator } from "@radix-ui/react-select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Key, Loader2 } from "lucide-react";
import Link from "next/link";

const AuthUI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  //const { signIn } = useSignIn();
  const { signUp, isLoaded: signUpLoaded } = useSignUp();
  const { signIn, isLoaded: signInLoaded } = useSignIn();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleGoogleAuth = async (mode) => {
    try {
      const strategy = mode === "signIn" ? signIn : signUp;
      await strategy.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/auth/callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      setError("Error al conectar con Google");
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });

      if (result.status === "complete") {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!signUpLoaded) return;

    try {
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
      });

      // Send email verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      console.error("Error en registro:", err);
      setError(
        err.errors?.[0]?.message || "Error al registrarse. Inténtalo de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        setError("Error en la verificación. Intenta de nuevo.");
        return;
      }

      // Si la verificación es exitosa, redirige
      window.location.href = "/plan";
    } catch (err) {
      setError("Código de verificación inválido. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff]">
      <Header />
      <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
        <Card className="w-full mx-10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-extrabold text-center text-[#001238] font-['Adelle']">
              Sign Up
            </CardTitle>
            <CardDescription className="text-center text-[#808995] text-base">
              {pendingVerification
                ? "Ingresa el código de verificación enviado a tu email"
                : "Welcome! Please fill in the details to get started."}
            </CardDescription>
          </CardHeader>

          {pendingVerification ? (
            <form onSubmit={handleVerifyEmail}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    name="code"
                    placeholder="Código de verificación"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#d6f898] hover:bg-[#c0f75a] text-[#001238] font-black"type="submit" disabled={isLoading}> 
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verificando...
                    </>
                  ) : ( 
                    "Verificar Email"
                  )}
                </Button>
              </CardFooter>
            </form>
          ) : (
            <>              
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full py-5 border-[#808995]"
                  onClick={() => handleGoogleAuth("signIn")}
                  disabled={!signInLoaded}
                >
                  <svg className="w-5 h-5 mr-6" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="font-bold font-['adelle-sans']">
                    Continue with Google
                  </span>
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full h-[1px] bg-[#0000000c] mx-6" />
                </div>
                <div className="relative flex justify-center text-md">
                  <span className="bg-white px-4 text-[#001238] font-semibold">
                    or
                  </span>
                </div>
              </div>
              <form onSubmit={handleSignUp}>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-2">
                    <div className="relative text-left ">
                     {/*  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" /> */}
                     <label className="text-[#001238] w-full font-bold text-sm" htmlFor="email">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="pl-4 bg-[#f5f8ff] font-semibold text-[#808995] py-5"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative text-left ">
                      {/* <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" /> */}
                      <div className="flex items-center justify-between">
                        <label className="block text-[#001238] font-bold text-sm" htmlFor="password">Password</label>                       
                        {/* <Link href="/forgot-password" className="block text-[#2c5ef9] font-bold text-sm" >Forgot Password?</Link> */}
                      </div>
                      
                      <Input
                        name="password"
                        type="password"
                        placeholder="************"
                        className="pl-4 bg-[#f5f8ff] font-semibold text-[#808995] py-5"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </CardContent>
                <CardFooter className="block">
                  <Button className="w-full bg-[#d6f898] hover:bg-[#c0f75a] text-[#001238] font-black w-1/3 m-auto" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Cargando...
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                  {/* <div className="mt-6">
                    <p className="flex items-center justify-center gap-2 text-[#001238] font-semibold text-sm">Don’t have an account? <Link href="/sign-up" className="block text-[#2c5ef9] font-bold text-sm" >Sign Up</Link></p>
                  </div> */}
                </CardFooter>
              </form>
            </>
          )}
        </Card>
      </main>
    </div>
  );
};

export default AuthUI;
