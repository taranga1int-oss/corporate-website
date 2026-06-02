export type Testimonial = {
  offering: string;
  companyLogo: string;
  companyLogoAlt: string;
  companyLogoWidth: number;
  companyLogoHeight: number;
  quote: string;
  name: string;
  designation: string;
  company: string;
  headshot?: string;
  headshotAlt?: string;
  headshotClassName?: string;
};

export const testimonials: Testimonial[] = [
  {
    offering: "Bill to Company",
    companyLogo: "/testimonials/mediassist-logo.png",
    companyLogoAlt: "MediAssist logo",
    companyLogoWidth: 145,
    companyLogoHeight: 48,
    quote:
      "Bill to Company feature has made meal management truly seamless for our employees across India. The built-in wallet eliminates reimbursement complexities entirely - no paperwork, no payment coordination, just a smooth experience from ordering to payment. The platform discounts and dining benefits have added real value to employee satisfaction.",
    name: "Stanley Agnelo",
    designation: "Vice President - Administration",
    company: "MediAssist",
    headshot: "/testimonials/stanley-agnelo.png",
    headshotAlt: "Stanley Agnelo",
    headshotClassName:
      "h-[92px] w-[92px] shrink-0 rounded-2xl object-cover object-top",
  },
  {
    offering: "Bill to Company",
    companyLogo: "/testimonials/wework-logo.png",
    companyLogoAlt: "WeWork logo",
    companyLogoWidth: 240,
    companyLogoHeight: 72,
    quote:
      "Swiggy's Bill to Company solution has brought unmatched transparency and control to our meal benefits. We now track expenses in real-time, stay fully aligned with budgets, and still give our employees the freedom to choose their meals. The shift has not only simplified admin but improved employee satisfaction.",
    name: "Maria Sneha",
    designation: "Administrator",
    company: "WeWork",
    headshot: "/testimonials/maria-sneha.png",
    headshotAlt: "Maria Sneha",
    headshotClassName:
      "h-[104px] w-[104px] shrink-0 rounded-2xl object-contain object-top",
  },
  {
    offering: "Bill to Company",
    companyLogo: "/testimonials/5.png",
    companyLogoAlt: "KFintech logo",
    companyLogoWidth: 100,
    companyLogoHeight: 20,
    quote:
      "Earlier, meal reimbursements meant chasing employees for receipts, handling paperwork, and managing multiple approval layers-costing us time and productivity. With Swiggy for Work, the process is completely seamless, eliminating administrative overhead. It has streamlined our workflows and saved valuable hours for our team.",
    name: "A V Hanisha",
    designation: "Facility Manager",
    company: "KFintech",
    headshot: "/testimonials/av-hanisha.png",
    headshotAlt: "A V Hanisha",
  },
  {
    offering: "Bill to Company",
    companyLogo: "/testimonials/translumina-logo.png",
    companyLogoAlt: "Translumina logo",
    companyLogoWidth: 112,
    companyLogoHeight: 23,
    quote:
      "MyBiz Wallet on Swiggy has been a real advantage. It's made ordering food even more convenient-payments are fast, seamless, and hassle-free, with no need to switch apps or re-enter details. The best part is that the corporate wallet balance updates instantly. I also receive invoices and MIS reports on time, exactly as needed. Overall, it's been a smooth and reliable experience.",
    name: "Bhoomika",
    designation: "Assistant Manager, Admin",
    company: "Translumina",
    headshot: "/testimonials/translumina-bhoomika.jpeg",
    headshotAlt: "Bhoomika",
    headshotClassName:
      "h-[92px] w-[92px] shrink-0 rounded-2xl object-cover object-top",
  },
];
