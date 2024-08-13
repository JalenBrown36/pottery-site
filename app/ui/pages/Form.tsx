'use client';

export default function Form() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            topic: { value: string };
        };
        const name = target.name.value;
        const email = target.email.value;
        const topic = target.topic.value;
        console.log(name, email, topic);
    };

  return (
    <div className="w-full pl-8 flex flex-col gap-1 text-left">
      <h4 className="font-bold">Message Hotline</h4>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 [&_input]:pl-2 [&_input]:py-1 [&_input]:border-[.5px] [&_input]:border-[#af5b422b] [&_input]:outline-none [&_input]:rounded">
        <input type="text" placeholder="Name" name="name" className="h-min"/>
        <input type="text" placeholder="Email (Required)" name="email" className="h-min"/>
        <textarea rows={6} placeholder="Topic (Required)" name="topic" className="h-full px-2 py-1 border-[.5px] border-[#af5b422b] outline-none text-wrap resize-none rounded overflow-hidden" />
        <button type="submit" className="w-1/4 text-white bg-[#AF5C42] rounded">Send</button>
      </form>
    </div>
  );
}
