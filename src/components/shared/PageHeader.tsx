import { Button, Flex, Typography } from 'antd'
import type { ReactNode } from 'react'
const { Title, Text } = Typography
export default function PageHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <Flex className="page-header" justify="space-between" align="center" gap={16} wrap>
    <div><Title level={2} style={{ margin: 0 }}>{title}</Title>{description && <Text type="secondary">{description}</Text>}</div>
    {action && <div>{action}</div>}
  </Flex>
}
export function BackButton({ onClick }: { onClick: () => void }) { return <Button onClick={onClick}>Kembali</Button> }
