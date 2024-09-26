import List from "./List";
import ParentList from "./ParentList";

const FooterList = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <ParentList>
          <List>Tanya Jawab</List>
          <List>Pusat Bantuan</List>
          <List>Akun</List>
          <List>Pusat Media</List>
          <List>Hubungan Investor</List>
          <List>Lowongan Kerja</List>
        </ParentList>
        <ParentList>
          <List>Tukar Kartu Hadiah</List>
          <List>Beli Kartu Hadiah</List>
          <List>Cara Menonton</List>
          <List>Ketentuan Pengguna</List>
          <List>Privasi</List>
          <List>Preferensi Cookie</List>
        </ParentList>
        <ParentList>
          <List>Informasi Perusahaan</List>
          <List>Hubungi Kami</List>
          <List>Uji Kecepatan</List>
          <List>Informasi Legal</List>
          <List>Hanya di Netflix</List>
        </ParentList>
      </div>
    </>
  );
};

export default FooterList;
