import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { X, Search, Heart, ShoppingCart, User } from "lucide-react";

const MobileSidebar = ({
  isOpen,
  onClose,
  navItems = [
    { name: "Home", slug: "/" },
    { name: "Contact", slug: "/contact" },
    { name: "About", slug: "/about" },
    { name: "Signup", slug: "/signup" },
  ],
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems?: { name: string; slug: string }[];
}) => {
  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 w-[80%] h-full bg-white 
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          shadow-2xl
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <Logo />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow p-4 space-y-4 overflow-y-auto">
            {navItems?.map((item: { name: string; slug: string }) => (
              <Link
                key={item.slug}
                href={item.slug}
                className="block py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-md px-4 transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer with Quick Actions */}
          <div className="p-4 border-t flex justify-center space-x-6">
            <QuickActionButton
              icon={<Search size={24} />}
              label="Search"
              onClick={() => {
                /* Implement search action */
              }}
            />
            <QuickActionButton
              icon={<User size={24} />}
              label="User Account"
              onClick={() => {
                /* Implement user account action */
              }}
            />
            <QuickActionButton
              icon={<Heart size={24} />}
              label="Wishlist"
              onClick={() => {
                /* Implement wishlist action */
              }}
            />
            <QuickActionButton
              icon={<ShoppingCart size={24} />}
              label="Shopping Cart"
              onClick={() => {
                /* Implement cart action */
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}
const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label, onClick }) => (
  <button
    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
    aria-label={label}
    onClick={onClick}
  >
    {icon}
  </button>
);

export default MobileSidebar;
