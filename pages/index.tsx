import { useState } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [state, setState] = useState({
    quantity: 0,
    price: 0,
    totalSpent: 0,
    currentPrice: 0,
    profit: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const res = await fetch('/api/crypto');
    // const data = await res.json();
    // console.log('data', data);
    // const currentPrice = data.data.price;
    const currentPrice = 2530.6353624531002;
    const profit = currentPrice * state.quantity - state.totalSpent;
    setState({
      ...state,
      currentPrice: currentPrice,
      profit: profit,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const totalSpent =
      e.target.name === 'price'
        ? state.quantity * Number(value)
        : Number(value) * state.price;
    setState({
      ...state,
      [e.target.name]: value,
      totalSpent: totalSpent,
    });
  };

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity" className="text-sm">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="border border-gray-300 p-2"
          name="quantity"
          value={state.quantity}
          onChange={handleChange}
        />
        <label htmlFor="price" className="text-sm">
          Price per Coin
        </label>
        <input
          type="number"
          id="price"
          className="border border-gray-300 p-2"
          name="price"
          value={state.price}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
        <p>Total Spent: ${state.totalSpent}</p>
        <p>Profit: ${state.profit} </p>
      </form>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
