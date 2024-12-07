import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primary1: '#363738',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			secondary1: '#FEFAF1',
  			secondary2: '#DB4444',
  			BG: '#FFFFFF',
  			text: '#FAFAFA',
  			text1: '#7D8184',
  			text2: '#000000',
  			button: '#000000',
  			button1: '#00FF66',
  			button2: '#DB4444',
  			hoverButton: '#EB5757',
  			hoverButton2: '#A0BCE0',
        line:'#b3b3b3',
  			logoColor: '#363738',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'Heading-110PX-Bold': ["110px",{ lineHeight: "115px", fontWeight: "700", letterSpacing: "3px" },],
  			'Heading-110PX-SemiBold': ["110px",{ lineHeight: "115px", fontWeight: "600", letterSpacing: "3px" },],
  			'Heading-48PX-SemiBold': ["48px",{ lineHeight: "60px", fontWeight: "600", letterSpacing: "4px" },],
  			'Heading-36PX-SemiBold': ["36px",{ lineHeight: "48px", fontWeight: "600", letterSpacing: "4px" },],
  			'Heading-24PX-Bold': ["24px",{ lineHeight: "24px", fontWeight: "700", letterSpacing: "3px" },],
  			'Heading-24PX-SemiBold': ["24px",{ lineHeight: "24px", fontWeight: "600", letterSpacing: "3px" },],
  			'Title-20PX-SemiBold': ["20px",{ lineHeight: "28px", fontWeight: "600", letterSpacing: "0"},],
  			'Title-16PX-SemiBold': ["16px",{ lineHeight: "20px", fontWeight: "600", letterSpacing: "0"},],
  			'Title-16PX-Mediam': ["16px",{ lineHeight: "24px", fontWeight: "500", letterSpacing: "0"},],
  			'Title-16PX-Regular': ["16px",{ lineHeight: "24px", fontWeight: "400", letterSpacing: "0"},],
  			'Title-14PX-Regular': ["14px",{ lineHeight: "21px", fontWeight: "400", letterSpacing: "0"},],
  			'Title-14PX-Mediam': ["14px",{ lineHeight: "21px", fontWeight: "500", letterSpacing: "0"},],
  			'Title-14PX-SemiBold': ["14px",{ lineHeight: "21px", fontWeight: "600", letterSpacing: "0"},],
  			'Title-12PX-Regular': ["12px",{ lineHeight: "18px", fontWeight: "400", letterSpacing: "0"},],
  			'Title-11PX-Light': ["11px",{ lineHeight: "15px", fontWeight: "300", letterSpacing: "0"},],
        
      },
  		fontFamily: {
  			sans: "var(--font-poppins)",
  			inter: "var(--font-inter)",
  			geist: ["var(--font-geist-sans)", "sans-serif"],
  			mono: ["var(--font-geist-mono)", "monospace"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
