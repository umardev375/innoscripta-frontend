import React from "react";
import { Rings, ThreeDots } from "react-loader-spinner";

interface IProps {
  width?: any
  height?: any
  className?: any
  type?: "three-dots" | "rings"
  layout?: "center"
  loadercolor?: any
}
const Loader = ({ width, height, className, type, layout, loadercolor }: IProps) => {
  

  const renderType = () => {

    if (type === 'three-dots') {
      return (<ThreeDots
        height={height ? height : "24"}
        width={width ? width : "24"}
        color="#090909"
        ariaLabel="loading"
        wrapperClass={className || ''}
      />)
    }
    return (
      <Rings
        height={height ? height : "120"}
        width={width ? width : "120"}
        color={loadercolor ? loadercolor :"#090909"}
        ariaLabel="loading"
        wrapperClass={className || ''}
      />
    );
  }
  return (
    layout === "center" ? (
      <div className='flex flex-col items-center min-h-[46.875rem]'>
        {renderType()}
      </div>
    ) :
      renderType()
  )
};

export default Loader;
