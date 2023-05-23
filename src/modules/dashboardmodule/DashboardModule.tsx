import Select from "../../Components/select/Select";
import { useRouter } from "next/router";
import withAuth from "../withAuth/withAuth";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { buyerService } from "../../services/buyer.service";
import { filterChartData } from "../../config/functions";

const DashboardModule = () => {
  const router = useRouter();

  const [adminData, setAdminData] = useState<any>(null);
  const [chartData, setChartData] = useState<any>(null);
  const [chartDataShow, setChartDataShow] = useState<any>(null);
  const [chartDataCategory, setchartDataCategory] = useState<any>([]);


  let [filter, setFiler] = useState<any>('Daily')

  const dashboardDataHandler = async () => {
    try {
      let resp = await buyerService.adminDashboardData();
      setAdminData(resp?.data?.data);
    } catch (err) { }
  };

  const getChartData = async () => {
    try {
      let resp = await buyerService.getChartData();
      console.log(resp, 'admin');
      
      setChartData(resp?.data?.data);
    } catch (err) { 
      console.log(err)
    }
  };

  useEffect(() => {
    dashboardDataHandler();
    getChartData();
  }, []);

  const options = {
    chart: {
      type: "column",
      inverted: false,
      backgroundColor: ["#151515"],
    },
    colors: ["#E0F27B"],
    title: false,
    subtitle: false,
    yAxis: {
      gridLineDashStyle: "longdash",
      gridLineColor: "#484040",
      title: false,
    },

    credits: {
      enabled: false,
    },
    xAxis: {
      crosshair: {
        width: 1,
      },
      type: "datetime",
      labels: {
        // format: "{value:%d %b %H:%M %p}",
        rotation: -50,
        align: "right",
      },
      categories: chartDataCategory
    },
    legend: {
      enabled: false,
    },

    tooltip: {
      valueDecimals: 2,
      valueSuffix: " %",
    },
    plotOptions: {
      // series: {
      //   pointStart: 1621366784000, // point strat getting dynmic from data staring value
      //   pointInterval: 24 * 3600 * 1000, // Granularity need to pass dyamicly to plot chart
      // },
    },
    series: [
      {
        data: chartDataShow

        // data: [
        //   [1621366784000, 54],
        //   [1621368584000, 55],
        //   [1621370384000, 55],
        //   [1621372184000, 56],
        //   [1621373984000, 56],
        //   [1621375784000, 56],
        //   [1621377583000, 57],
        //   [1621379383000, 57],
        //   [1621381183000, 58],
        //   [1621382983000, 59],
        //   [1621384783000, 59],
        //   [1621386583000, 60],
        //   [1621388383000, 60],
        //   [1621390183000, 60],
        //   [1621391983000, 60],
        //   [1621393783000, 60],
        //   [1621395583000, 60],
        //   [1621397383000, 59],
        //   [1621399183000, 59],
        //   [1621400983000, 59],
        //   [1621404583000, 60],
        //   [1621406383000, 60],
        //   [1621408183000, 60],
        //   [1621409983000, 59],
        //   [1621411783000, 59],
        //   [1621413583000, 58],
        //   [1621415383000, 59],
        //   [1621417183000, 59],
        //   [1621418983000, 59],
        //   [1621420783000, 58],
        //   [1621422583000, 58],
        //   [1621424383000, 58],
        //   [1621426183000, 58],
        //   [1621427983000, 58],
        //   [1621429782000, 58],
        //   [1621431582000, 58],
        //   [1621433382000, 58],
        //   [1621435182000, 58],
        //   [1621436982000, 58],
        //   [1621438782000, 58],
        //   [1621440582000, 58],
        //   [1621442382000, 58],
        //   [1621444182000, 57],
        //   [1621595378000, 49],
        //   [1621597178000, 49],
        //   [1621598978000, 49],
        //   [1621600778000, 49],
        //   [1621602577000, 48],
        //   [1621604377000, 48],
        //   [1621606177000, 47],
        //   [1621607977000, 47],
        //   [1621705175000, 52],
        //   [1621706975000, 52],
        //   [1621708775000, 52],
        //   [1621710575000, 52],
        //   [1621712375000, 52],
        //   [1621714175000, 52],
        //   [1621715975000, 52],
        //   [1621717774000, 52],
        //   [1621719574000, 52],
        //   [1621721375000, 52],
        //   [1621723175000, 52],
        //   [1621724975000, 52],
        //   [1621726775000, 52],
        //   [1621728575000, 52],
        //   [1621730375000, 51],
        //   [1621732175000, 50],
        //   [1621733975000, 50],
        //   [1621735775000, 50],
        //   [1621737575000, 50],
        //   [1621739375000, 50],
        //   [1621741175000, 50],
        //   [1621742975000, 50],
        //   [1621744775000, 50],
        //   [1621746574000, 51],
        //   [1621748374000, 51],
        //   [1621750174000, 51],
        //   [1621751974000, 51],
        //   [1621753774000, 51],
        //   [1621755574000, 51],
        //   [1621757374000, 51],
        //   [1621759174000, 51],
        //   [1621760974000, 51],
        //   [1621762774000, 52],
        //   [1621764574000, 52],
        //   [1621924771000, 44],
        //   [1621926571000, 44],
        //   [1621928371000, 43],
        //   [1621930171000, 43],
        // ],
      },
    ],
  };

  const dropdownData = [
    {
      name: "Daily",
    },
    {
      name: "Weekly",
    },
    {
      name: "Monthly",
    },
  ];

  useEffect(() => {
    let data = filterChartData(filter, chartData)
    let allcategory:any=[]
    data?.forEach((element:any) => {
      allcategory.push(element[0])
    });
    setchartDataCategory([...allcategory])

    let alldata:any=[]
    data?.forEach((element:any) => {
      alldata.push(element[1])
    });

    setChartDataShow(alldata)
  }, [filter,chartData])
  return (
    <>
      <div className="2xl:col-span-4 col-span-1 grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4  w-full ">
        <div
          className="bg-white shadow pt-[2.125rem] pb-8 pl-10 pr-8 rounded-xl flex justify-between items-end cursor-pointer"
          onClick={() => {
            router.push("/creator");
          }}
        >
          <div>
            <h2 className="text-[1.75rem]  mb-10">Total Sellers</h2>
            <h3 className="text-[#29303A] text-[2.875rem]   break-words">
              {adminData?.totalCreators}
            </h3>
          </div>
          <div className="bg-themecolor p-3 rounded-2xl">
            <i className={`icon-nft-management text-4xl`}></i>
          </div>
        </div>

        <div
          className="bg-white shadow pt-[2.125rem] pb-8 pl-10 pr-8 rounded-xl flex justify-between items-end cursor-pointer"
          onClick={() => {
            router.push("/buyers");
          }}
        >
          <div>
            <h2 className="text-[1.75rem]  mb-10">Total Buyers</h2>
            <h3 className="text-[#29303A] text-[2.875rem]   break-words">
              {adminData?.totalBuyers}
            </h3>
          </div>
          <div className="bg-themecolor p-3 rounded-2xl">
            <i className={`icon-user-square text-4xl`}></i>
          </div>
        </div>

        <div
          className="bg-white shadow pt-[2.125rem] pb-8 pl-10 pr-8 rounded-xl flex justify-between items-end cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <div>
            <h2 className="text-[1.75rem]  mb-10">Total NFTs</h2>
            <h3 className="text-[#29303A] text-[2.875rem]   break-words">
              {adminData?.totalNfts}
            </h3>
          </div>
          <div className="bg-themecolor p-3 rounded-2xl">
            <i className={`icon-icon text-4xl`}></i>
          </div>
        </div>
      </div>
      <div className="  rounded-[16px] px-6 pt-8 sm:mt-7 mt-4 bg-white">
        <div className="flex   xs:block justify-between items-center ">
          <h4 className="mb-6 xl:text-[28px] text-black font-Circular-Medium">
            Our Earnings
          </h4>
          <div>
            <Select setFilerKey={setFiler} data={dropdownData} />
          </div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};
export default withAuth(DashboardModule);
