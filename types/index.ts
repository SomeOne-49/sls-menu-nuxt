export interface CategoryBoxProps {
  link: string;
  img: string;
  icon: string;
  title: string;
  mealsCount: string;
}
export interface CategoryBarBoxProps {
  title: string;
  img: string;
  link: string;
  isActive: boolean;
  isSlider?: boolean;
}
export interface ProductBoxProps {
  title: string;
  id: string;
  price: string;
  img: string;
}
export interface SectionProps {
  title: string;
  link: string;
  products: ProductBoxProps[];
}
export interface SectionHeadProps {
  title: string;
  link: string;
}
