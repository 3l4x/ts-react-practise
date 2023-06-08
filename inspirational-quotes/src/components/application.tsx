import { useEffect, useMemo, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quote, setQuote] = useState<Quote | undefined>();
  const [quotes, setQuotes] = useState<Quote[] | undefined>();


  const updateQuotes = (e: React.FormEvent<HTMLFormElement>, count: number): void => {
    e.preventDefault();
    fetchQuotes(count).then(setQuotes);
  }

  const quotesMappedToComponents = useMemo((): JSX.Element[] | null => {
    if (!quotes) return null;
    return quotes.map((quote) => (
      <InspirationalQuote content={quote.content} source={quote.source} key={quote.id} />
    ))
  }, [quotes])

  useEffect(() => {
    fetchRandomQuote().then(setQuote);
  }, []);
  if (!quote) return <Loading />;
  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      <Quotes
        onSubmit={updateQuotes}
      >
          {quotesMappedToComponents}
      </Quotes>
    </main>
  );
};

export default Application;
