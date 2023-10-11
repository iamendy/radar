import { useState } from "react";
import Rainy from "../components/Rainy";
import moneriumClient from "../lib/monerium";
import { useSignMessage, useAccount } from "wagmi";
import Loader from "./icons/Loader";

const Onboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage({
    message: "I hereby declare that I am the address owner.",
    onSuccess(data) {
      processMonerium(data);
    },
    onError(e) {
      console.log(e);
    },
  });

  const handleAuth = async () => {
    await signMessageAsync();
  };

  const processMonerium = async (signature: string) => {
    // Construct the authFlowUrl for your application and redirect your customer.
    let authFlowUrl = moneriumClient.getAuthFlowURI({
      client_id: process.env.NEXT_PUBLIC_MONERIUM_CLIENT_ID as string,
      // optional automatic wallet selection:
      redirect_uri: process.env.NEXT_PUBLIC_NEXTAUTH_URL + "/integration",
      network: "chiado",
      chain: "gnosis",
      address: address,
      signature,
    });

    // Store the code verifier in localStorage
    //@ts-ignore
    window.localStorage.setItem("myCodeVerifier", moneriumClient?.codeVerifier);
    // Redirecting to the Monerium onboarding / Authentication flow.
    window.location.replace(authFlowUrl);
  };

  return (
    <section className="flex items-center flex-col h-full">
      <Rainy />

      <div className="text-center flex flex-col ">
        <h3>Save for the rainy day</h3>
        <div>Please connect your Monerium account</div>
        <button
          onClick={() => {
            setIsLoading(true);
            handleAuth();
          }}
          className="bg-yellow font-bold text-base-100 px-4 py-2 rounded-lg mt-4 flex items-center justify-center"
        >
          {isLoading ? <Loader alt /> : "Connect Monerium"}
        </button>
      </div>
    </section>
  );
};

export default Onboard;
