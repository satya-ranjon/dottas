import Image from "next/image";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

export default async function ProjectsTable() {
  return (
    <div className="mt-6 flow-root ">
      <div className="inline-block min-w-full align-middle">
        <div className=" bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <div
              // key={invoice.id}
              className="mb-2 w-full  bg-white p-4">
              <div className=" border-b pb-4 flex justify-between items-start">
                <h1 className="mb-2">First Project two three</h1>
                <div className="flex -space-x-1 overflow-hidden">
                  <Image
                    width={28}
                    height={28}
                    className="inline-block rounded-full ring-2 ring-white"
                    src="https://i.ibb.co/crT77Gt/man-4.png"
                    alt={`s profile picture`}
                  />
                  <Image
                    width={28}
                    height={28}
                    className="inline-block rounded-full ring-2 ring-white"
                    src="https://i.ibb.co/crT77Gt/man-4.png"
                    alt={`s profile picture`}
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <span>Apr 28, 2024</span>

                <div className="flex justify-end gap-2">
                  <Button size="middle" icon={<DeleteOutlined />} />
                  <Button size="middle" icon={<EditOutlined />} />
                </div>
              </div>
            </div>
          </div>
          <table className="hidden min-w-full  text-gray-900 md:table">
            <thead className=" text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Users
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr
                // key={invoice.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none">
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <h1>First Project one two</h1>
                </td>

                <td className="whitespace-nowrap px-3 py-3 min-w-28">
                  <div className="flex -space-x-1 overflow-hidden">
                    <Image
                      width={28}
                      height={28}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://i.ibb.co/crT77Gt/man-4.png"
                      alt={`s profile picture`}
                    />
                    <Image
                      width={28}
                      height={28}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://i.ibb.co/crT77Gt/man-4.png"
                      alt={`s profile picture`}
                    />
                    <Image
                      width={28}
                      height={28}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://i.ibb.co/crT77Gt/man-4.png"
                      alt={`s profile picture`}
                    />
                    <Image
                      width={28}
                      height={28}
                      className="inline-block rounded-full ring-2 ring-white"
                      src="https://i.ibb.co/crT77Gt/man-4.png"
                      alt={`s profile picture`}
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">Apr 28, 2024</td>

                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <Link href="/dashboard/projects/1/view">
                      <Button size="middle" icon={<EyeOutlined />} />
                    </Link>
                    <Link href="/dashboard/projects/1/edit">
                      <Button size="middle" icon={<EditOutlined />} />{" "}
                    </Link>

                    <Button size="middle" icon={<DeleteOutlined />} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
