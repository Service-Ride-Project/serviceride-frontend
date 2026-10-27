import {BellOutlined, MenuOutlined, QuestionCircleOutlined, UserOutlined,} from "@ant-design/icons";
import {Avatar, Button, Dropdown, Flex, Layout, Select, Space, Tooltip, Typography,} from "antd";
import {useNavigate} from "react-router";
import {type Role, roles} from "@/config/navigation";

const {Header: AntHeader} = Layout;
export default function Header({
                                   role,
                                   onRoleChange,
                                   onMenu,
                               }: {
    role: Role;
    onRoleChange: (role: Role) => void;
    onMenu: () => void;
}) {
    const navigate = useNavigate();
    return (
        <AntHeader className="app-header">
            <Flex
                align="center"
                justify="space-between"
                gap={16}
                className="header-content"
            >
                <Space size={12}>
                    <Button
                        className="mobile-menu"
                        icon={<MenuOutlined/>}
                        onClick={onMenu}
                        aria-label="Buka menu"
                    />
                    <div className="header-title">
                        <Typography.Text strong>Dashboard Service Ride</Typography.Text>
                        <Typography.Text type="secondary">
                            Hai, Pak Haji Mudin
                        </Typography.Text>
                    </div>
                </Space>
                <Space size={12}>
                    <span className="role-caption">Lihat sebagai</span>
                    <Select
                        aria-label="Pilih role pratinjau"
                        value={role}
                        onChange={onRoleChange}
                        style={{minWidth: 205}}
                        options={Object.entries(roles).map(([value, label]) => ({
                            value,
                            label,
                        }))}
                    />
                    <Tooltip title="Notifikasi">
                        <Button
                            type="text"
                            shape="circle"
                            icon={<BellOutlined/>}
                            onClick={() => navigate("/notifications")}
                        />
                    </Tooltip>
                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "settings",
                                    label: "Pengaturan",
                                    icon: <UserOutlined/>,
                                },
                                {
                                    key: "help",
                                    label: "Tentang pratinjau",
                                    icon: <QuestionCircleOutlined/>,
                                },
                                {key: "login", label: "Halaman masuk"},
                            ],
                            onClick: ({key}) =>
                                navigate(
                                    key === "settings"
                                        ? "/settings"
                                        : key === "login"
                                            ? "/login"
                                            : "/",
                                ),
                        }}
                    >
                        <Avatar className="header-avatar" icon={<UserOutlined/>}/>
                    </Dropdown>
                </Space>
            </Flex>
        </AntHeader>
    );
}
