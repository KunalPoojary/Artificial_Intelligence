import TicketForm from '../../../components/ticket';

export default function Home() {
  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Customer Support Form 
      </h2>
      <TicketForm />
    </div>
  );
}