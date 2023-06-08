import { useState, PropsWithChildren, useCallback } from 'react';


type QuotesProps = PropsWithChildren<{

  //can be React.FormEventHandler instead of FormEvent, its less typing
  //same as ChangeEventHandler
  onSubmit: (e: React.FormEvent<HTMLFormElement>, count: number) => void,
}>


const Quotes = ({ children, onSubmit }: QuotesProps) => {
  const [count, setCount] = useState<number>(0);


  const handleCountInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(e.target.valueAsNumber);
  }, [setCount]);


  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e, count);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={handleCountInputChange}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
