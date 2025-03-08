import React from "react";
// import Contacts from "../main/_components/contacts";
import News from "../main/_components/news";
import Content from "./_components/content";

const NewsPage = () => {
  return (
    <div className="flex mt-[150px] flex-col gap-[100px]">
      <Content />
      <News />
      {/* <Contacts /> */}
    </div>
  );
};

export default NewsPage;
