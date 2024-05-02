"use client";

import { Avatar, Image, List } from "antd";
import React from "react";

export default function Activates({ activates }: { activates: any[] }) {
  console.log(activates);
  return (
    <div>
      <List
        size="large"
        header={<div className=" font-semibold ">Recent Activates</div>}
        bordered
        dataSource={activates}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.user.img} />}
              title={item.user.name}
              description={item.title}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
