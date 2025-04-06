export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <div className="mb-2">© {new Date().getFullYear()} MyShop. All rights reserved.</div>
        <div className="text-sm">
          Quick Links: <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms</a> | <a href="#" className="underline">Support</a>
        </div>
      </footer>
    )
  }
  