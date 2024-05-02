import Breadcrumb from "@/components/ui/breadcrumb";
import { getSingleTask } from "@/lib/actions";
import dayjs from "dayjs";
import Image from "next/image";

export default async function SingleTask({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const task = await getSingleTask(id);

  return (
    <div className="">
      <div className=" flex flex-col md:flex-row justify-start items-center gap-4">
        <Breadcrumb
          breadcrumbs={[
            { label: "Tasks", href: "/dashboard/tasks" },
            {
              label: task.title,
              href: `/dashboard/tasks/${id}/view`,
              active: true,
            },
          ]}
        />
      </div>
      <div className="flex justify-start items-center gap-10 mt-10">
        <h1>Date Line : </h1>
        {task.deadlines && (
          <div className="text-xs text-neutral-500">
            {dayjs(task.deadlines).format("MMM D, YYYY")}
          </div>
        )}
      </div>
      <div className="mt-10  flex justify-start items-start gap-2">
        <p className=" min-w-[600px] w-full p-6  bg-gray-50">{task.title}</p>

        <div className=" w-full max-w-[600px] p-6 bg-gray-50 space-y-3 ">
          <h1 className="font-semibold"> Assigned Team Members </h1>
          {task.assigneds.map((user: any, i) => (
            <div className="flex justify-start items-start gap-4" key={i}>
              <Image
                key={user.id}
                width={28}
                height={28}
                className="inline-block rounded-full ring-2 ring-white"
                src={user.img}
                alt={`${user.name} profile picture`}
              />
              <p className="  text-gray-600 ">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
