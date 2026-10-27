import { App, Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Space, Typography, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import PageHeader from './PageHeader'
export type Field = { label: string; type?: 'text'|'email'|'number'|'date'|'select'|'textarea'|'upload'; options?: string[]; placeholder?: string; full?: boolean }
export default function FormPage({ title, description, fields, note }: { title: string; description: string; fields: Field[]; note?: string }) {
  const navigate = useNavigate(); const {message}=App.useApp()
  return <div className="page-stack"><PageHeader title={title} description={description} />
    <Card className="surface-card form-card">{note && <Typography.Paragraph type="secondary">{note}</Typography.Paragraph>}
      <Form layout="vertical" onFinish={() => message.info('Ini adalah pratinjau antarmuka. Data belum disimpan.')}>
        <Row gutter={16}>{fields.map(field => <Col xs={24} md={field.full ? 24 : 12} key={field.label}><Form.Item label={field.label} name={field.label}>
          {field.type === 'select' ? <Select placeholder={field.placeholder ?? `Pilih ${field.label.toLowerCase()}`} options={(field.options ?? []).map(x => ({ value:x, label:x }))} /> :
           field.type === 'date' ? <DatePicker style={{width:'100%'}} placeholder="Pilih tanggal" /> :
           field.type === 'number' ? <InputNumber style={{width:'100%'}} min={0} placeholder={field.placeholder} /> :
           field.type === 'textarea' ? <Input.TextArea rows={4} placeholder={field.placeholder} /> :
           field.type === 'upload' ? <Upload beforeUpload={() => false} maxCount={3}><Button icon={<UploadOutlined />}>Pilih berkas</Button></Upload> :
           <Input type={field.type === 'email' ? 'email' : 'text'} placeholder={field.placeholder ?? `Masukkan ${field.label.toLowerCase()}`} />}
        </Form.Item></Col>)}</Row>
        <Space><Button onClick={() => navigate(-1)}>Kembali</Button><Button type="primary" htmlType="submit">Lihat pratinjau</Button></Space>
      </Form>
    </Card>
  </div>
}
