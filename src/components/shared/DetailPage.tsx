import {
  Button,
  Card,
  Descriptions,
  Empty,
  Flex,
  Tabs,
  Tag,
  Typography,
} from "antd";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import PageHeader from "./PageHeader";
export default function DetailPage({
  title,
  description,
  fields,
  tabs,
  actionPath,
  actionLabel,
  extra,
}: {
  title: string;
  description: string;
  fields: string[];
  tabs?: string[];
  actionPath?: string;
  actionLabel?: string;
  extra?: ReactNode;
}) {
  const navigate = useNavigate();
  const content = (
    <Empty
      description="Data akan tampil setelah layanan terhubung"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  );
  return (
    <div className="page-stack">
      <PageHeader
        title={title}
        description={description}
        action={
          actionPath && (
            <Button type="primary" onClick={() => navigate(actionPath)}>
              {actionLabel ?? "Lanjutkan"}
            </Button>
          )
        }
      />
      {extra}
      <Card className="surface-card">
        <Flex justify="space-between" align="center" className="detail-heading">
          <Typography.Title level={4} style={{ margin: 0 }}>
            Ringkasan
          </Typography.Title>
          <Tag color="blue">Pratinjau UI</Tag>
        </Flex>
        <Descriptions
          bordered
          size="small"
          column={{ xs: 1, sm: 2, lg: 3 }}
          items={fields.map((label, i) => ({
            key: i,
            label,
            children: <Typography.Text type="secondary">—</Typography.Text>,
          }))}
        />
      </Card>
      {tabs ? (
        <Card className="surface-card">
          <Tabs
            items={tabs.map((label) => ({
              key: label,
              label,
              children: content,
            }))}
          />
        </Card>
      ) : (
        <Card className="surface-card">{content}</Card>
      )}
    </div>
  );
}
