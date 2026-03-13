import CategorySection from "@components/templates/CategorySection";

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategorySection>
      {children}
    </CategorySection>
  );
}

export default CategoryLayout;