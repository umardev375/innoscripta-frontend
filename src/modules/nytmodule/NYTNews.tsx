import React, { useEffect, useState } from "react";
import Input from "../../Components/Input";
import { useRouter } from "next/router";
import Loader from "../../Components/loader/loader/Loader";
import axios from "axios";
const Card = ({ title, description, imageUrl }: any) => (
  <div className="card">
    <img
      src={imageUrl ? imageUrl : "/assets/images/Placeholder.png"}
      alt={title}
      className="w-full"
      height={300}
    />
    <div className="card-description">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export const NYTModule = () => {
  const [pageloading, setPageLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();
  const [category, setCategory] = useState("All");
  const [fromDate, setFromDate] = useState();
  const [articles, setArticles] = useState([]);
  let filteredArticles = [];
  const fetchData = async () => {
    const url = "https://newsapi.org/v2/everything";
    const apiKey = "1f1a37b6eb2d4c59b3898c1aecb13956";
    if (fromDate && /^\d{4}-\d{2}-\d{2}$/.test(fromDate)) {
      const formattedFromDate = new Date(fromDate).toISOString();
      // const formattedFromDate = currentDate.toISOString();

      const params = {
        q:
          category === "All"
            ? "all"
            : category === "Business"
            ? "business"
            : category === "Sports"
            ? "sports"
            : category === "News"
            ? "news"
            : category === "Entertainment"
            ? "entertainment"
            : category === "Health"
            ? "health"
            : category,
        apiKey: apiKey,
        from: formattedFromDate,
      };
      try {
        const response = await axios.get(url, { params });
        filteredArticles = response.data.articles.filter(
          (article: any) =>
            article.title.toLowerCase().includes(searchKey.toLowerCase()) ||
            new Date(article.publishedAt) >= new Date(formattedFromDate)
        );

        console.log(filteredArticles, "filter");
        setArticles(filteredArticles);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleFilterClick = (filter: any) => {
    setCategory(filter);
  };
  useEffect(() => {
    fetchData();
  }, [category, fromDate, searchKey]);
  return (
    <>
      {pageloading ? (
        <div className="flex justify-center items-center  h-[100vh]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex sm:flex-row flex-col flex-start  justify-between md:items-center ">
            <h2 className="text-3xl sn:mb-0 mb-4">NewsApi.org</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 border-b-4 ">
            <div className="grid col-span-6">
              <ul className="flex justify-around items-center navbar-style">
                <li onClick={() => handleFilterClick("All")}>All</li>
                <li onClick={() => handleFilterClick("Business")}>Business</li>
                <li onClick={() => handleFilterClick("Sports")}>Sports</li>
                <li onClick={() => handleFilterClick("News")}>News</li>
                <li onClick={() => handleFilterClick("Entertainment")}>
                  Entertainment
                </li>
                <li onClick={() => handleFilterClick("Health")}>Health</li>
              </ul>
            </div>
            <div className="col-span-3 mt-2 mb-2">
              <Input
                type="date"
                placeholder=""
                className="cursor-pointer"
                value={fromDate}
                onchange={(e: any) => {
                  setFromDate(e.target.value);
                }}
              />
            </div>
            <div className="col-span-3 mt-2 mb-2">
              <Input
                onchange={(e: any) => {
                  setSearchKey(e.target.value);
                  fetchData();
                }}
                placeholder="Search by article ..."
                className="md:w-[20rem] w-[15rem] xs4:w-full  py-[1.125rem] rounded-xl pr-12"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 pr-8 pt-[3.5rem] mb-5"></div>
          <div className="grid grid-cols-3 gap-4 m-3">
            {articles.map((article: any) => (
              <Card
                key={article?.id}
                title={article?.title}
                description={article?.description}
                imageUrl={
                  article
                    ? article?.urlToImage
                    : article?.urlToImage === null
                    ? "/assets/images/user-images/02.png"
                    : "/assets/images/user-images/02.png"
                }
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
