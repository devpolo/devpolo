import { FULL_NAME } from "~/constants/text"

const Footer = () => {
  return (
    <footer>
      <p>
        © Copyright {new Date().getFullYear()}, {FULL_NAME}. All Rights
        Reserved.
      </p>
    </footer>
  )
}

export default Footer
