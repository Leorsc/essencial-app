import ModalBag from "@/components/ModalBag";
import useUser from "@/hooks/useUser";

export default function Cadastro() {
  const { brasil } = useUser()
  return (
    <>
      {brasil}
    </>
  )
}