export default function handler(req, res) {
  // Hanya terima method POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // 100 emoji batu
  const batu = '🗿'.repeat(100);

  // Response yang diminta
  const responseText =
`kamu mencari key bajingan?

${batu}

kirim full teks ini ke saurus bukan hanya sedikit tapi dari flag-{ sampai } penutup
flag-{akusaurusdanakukeren}`;

  // Kirim sebagai plain text
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(responseText);
}
