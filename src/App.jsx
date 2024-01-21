import { useState } from "react";
import Card from "./components/Card";
import WinCard from "./components/WinCard";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.country/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [done, setDone] = useState(false);
  const [res, setRes] = useState(0);

  return (
    <ApolloProvider client={client}>
      <>
        <div className="min-h-[90vh] mt-10 flex items-center justify-center flex-col">
          <div>
            <div className=" mb-[10px] w-full  text-zinc-100 text-4xl font-bold font-['Poppins'] uppercase">
              Country quiz
            </div>
            {done === false ? (
              <Card setRes={setRes} res={res} setDone={setDone} />
            ) : done === true ? (
              <WinCard res={res} setRes={setRes} setDone={setDone} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="text-center my-[20px] text-zinc-100 text-sm font-medium font-['Montserrat']">
          <span>created by </span>
          <a href="http://salahzanati.web.app/" className="font-bold underline">
            salahZanati
          </a>
          <span> - devChallenges.io</span>
        </div>
      </>
    </ApolloProvider>
  );
}

export default App;
