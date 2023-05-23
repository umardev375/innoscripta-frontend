import Image from "next/image"
import Link from "next/link"
import Button from "../../Components/Button"
import { OfferData } from "./OfferTableData"


export const OfferTable = () =>{

    return(
            <>
                <div className="overflow-hidden overflow-x-auto max-w-[100%]">
                    <table className="min-w-full at-tablestyle at-tablestyle2">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Bid Price</th>
                                <th>USD Price</th>
                                {/* <th>Expiration</th>
                                <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {OfferData.map((person) => (
                                <>
                                    <tr>
                                        <td>
                                            <div className="flex items-center">
                                                <figure className="mr-4 w-[70px] h-[70px]">
                                                    <Image src={person.image} objectFit="cover" className="rounded-lg" width={70} height={70} alt=""/>
                                                </figure>
                                                <div className="">
                                                    <h3 className="text-xl">{person.title}</h3>
                                                    <span className="block text-base text-[#2F80ED] font-Circular-Medium">{person.name}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center">
                                                <svg className="mr-4" width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.28125 10.4999L7.5 0V7.63631L0.28125 10.4999Z" fill="#5C5E56"/>
                                                    <path d="M14.7187 10.4999L7.5 0V7.63631L14.7187 10.4999Z" fill="#343430"/>
                                                    <path d="M7.5 7.6362L0.28125 10.4998L7.5 14.318V7.6362Z" fill="#43433E"/>
                                                    <path d="M7.5 7.6362L14.7188 10.4998L7.5 14.318V7.6362Z" fill="#2E2E2A"/>
                                                    <path d="M7.5 15.75L0.28125 11.9319L7.5 21V15.75Z" fill="#343430"/>
                                                    <path d="M7.5 15.75L14.7188 11.9319L7.5 21V15.75Z" fill="#5C5D56"/>
                                                </svg>
                                                {person.bidprice}WETH
                                            </div>
                                        </td>
                                        <td>
                                            ${person.usdprice}
                                        </td>
                                        {/* <td>{person.expiration}</td>
                                        <td className="text-right">
                                            <Link href="/collectiondetail"><a><Button className="min-w-[14.375rem]">Withdraw</Button></a></Link>
                                        </td> */}
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
    )
}