import CategorySection from '@components/templates/CategorySection'

type Props = {
  children: React.ReactNode
}

const CategoryLayout = ({ children }: Props) => {
  return <CategorySection>{children}</CategorySection>
}

export default CategoryLayout
