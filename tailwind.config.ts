import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    scrollBehavior: ["smooth", "auto"],
    screens: {
      phone: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        black: "#111111",
        white: "#FFFFFF",
        //그레이 스케일 재 정의
        gray: {
          900: "#222222",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9E9E9E",
          400: "#B5B5B5",
          300: "#E0E0E0",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        main: {
          primary: "#8530F1", // Main 컬러
          secondary: "#9D5F4F", // Sub 컬러
          purple: {
            1: "#AC6BFF",
            2: "#B683F7",
            3: "#C297F8",
            4: "#CEACF9",
            5: "#DAC1FB",
            6: "#E7D6FC",
            7: "#F9F4FF",
          },
        },
        // 긍정, 부정 색상
        role: {
          positive: "#8530F1",
          // #DB1A1A
          negative: "#F72F2F",
        },
        // 추가적인 텍스트 컬러 네이밍
        text: {
          primary: "#222222", // 타이틀 및 본문 텍스트 색상
          secondary: "#616161", // 서브 텍스트
          tertiary: "#9E9E9E", // 서브 텍스트 보조 색상
          caption: "#B5B5B5", // 비활성화된 텍스트 색상
        },
        // 배경 색상
        background: {
          primary: "#FFFFFF", // 전체 기본 배경 색상
          secondary: "#F5F5F5", // 페이지 단위 및 두 번째 배경 색상
          button: "#EEEEEE", // 버튼 Normal 색상
          divider: "#FAFAFA", // 목록, 구분선 등
        },
      },
      boxShadow: {
        card: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 카드 UI 쉐도우
      },
      fontSize: {
        h1: ["50px", { lineHeight: "70px", letterSpacing: "-0.025em", fontWeight: "600" }],
        h2: ["36px", { lineHeight: "50px", letterSpacing: "-0.025em", fontWeight: "600" }],
        h3: ["32px", { lineHeight: "45px", letterSpacing: "-0.025em", fontWeight: "600" }],
        h4: ["24px", { lineHeight: "34px", letterSpacing: "-0.025em", fontWeight: "600" }],
        subtitle1: ["20px", { lineHeight: "28px", letterSpacing: "-0.025em", fontWeight: "600" }],
        subtitle2: ["18px", { lineHeight: "25px", letterSpacing: "-0.025em", fontWeight: "600" }],
        body: ["16px", { lineHeight: "22px", letterSpacing: "-0.025em", fontWeight: "400" }],
        small: ["14px", { lineHeight: "20px", letterSpacing: "-0.025em", fontWeight: "600" }],
        buttonM: ["16px", { lineHeight: "22px", letterSpacing: "-0.025em", fontWeight: "600" }],
        buttonS: ["14px", { lineHeight: "20px", letterSpacing: "-0.025em", fontWeight: "500" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },  
  plugins: [],
};
export default config;
