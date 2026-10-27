import {Breadcrumb} from "antd";
import {Link, useLocation} from "react-router";
import {navigation} from "@/config/navigation.ts";

const labels: Record<string, string> = {
    create: "Tambah",
    detail: "Detail",
    verification: "Verifikasi",
    products: "Produk",
    stock: "Unit stok",
    movements: "Pergerakan",
    orders: "Pesanan",
    returns: "Retur",
    cart: "Keranjang",
    checkout: "Checkout",
    offline: "Antrean offline",
    inspections: "Pemeriksaan",
    estimates: "Estimasi",
    progress: "Progres",
    tracking: "Pelacakan",
    fulfillment: "Pemenuhan",
};
export default function Breadcrumbs() {
    const {pathname} = useLocation();
    const segments = pathname.split("/").filter(Boolean);
    const items = [{title: <Link to="/">Beranda</Link>}];
    let path = "";
    segments.forEach((segment, index) => {
        path += "/" + segment;
        const found = navigation.find((x) => x.path === path);
        const title = found?.label ?? labels[segment] ?? segment;
        items.push({
            title:
                index === segments.length - 1 ? (
                    <span>{title}</span>
                ) : (
                    <Link to={path}>{title}</Link>
                ),
        });
    });
    return <Breadcrumb items={items}/>;
}
