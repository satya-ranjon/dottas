"use client";

import { Avatar, List } from "antd";
import React from "react";

export default function Activates({ activates }: { activates: any[] }) {
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
