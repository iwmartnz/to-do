export default function Header() {
  return (
    <header className=" flex justify-center items-center gap-2 py-10">
      <figure className=" pt-2">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10V9.5V9.5C4 7.17029 4 6.00544 4.3806 5.08658C4.88807 3.86144 5.86144 2.88807 7.08658 2.3806C8.00544 2 9.17029 2 11.5 2H11.7782C12.9105 2 13.4766 2 14.0113 2.11855C14.5806 2.24479 15.1235 2.46965 15.6153 2.78296C16.0772 3.07721 16.4775 3.47753 17.2782 4.27817L17.6569 4.65685C18.5216 5.52161 18.954 5.95399 19.2632 6.45858C19.5373 6.90594 19.7394 7.39366 19.8618 7.90384C20 8.47928 20 9.09076 20 10.3137V14C20 16.8003 20 18.2004 19.455 19.27C18.9757 20.2108 18.2108 20.9757 17.27 21.455C16.2004 22 14.8003 22 12 22H11.5C9.17029 22 8.00544 22 7.08658 21.6194C5.86144 21.1119 4.88807 20.1386 4.3806 18.9134C4 17.9946 4 16.8297 4 14.5V14.5V14M9.5 14.5L11 16L15 12M14 2.5V6.00003C14 7.1046 14.8954 8.00003 16 8.00003V8.00003H17"
            stroke="#64f5b7"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </figure>

      <h1 className=" text-6xl font-['Moirai_One']">Todo</h1>
    </header>
  );
}
