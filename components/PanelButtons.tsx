import { Dispatch, SetStateAction } from "react"
import { Button } from "semantic-ui-react"
import { UserData } from "../types"

type Props = {
  fetchedUser: UserData
  setMyUser: Dispatch<SetStateAction<UserData>>
}

const PanelButtons = ({ fetchedUser, setMyUser }: Props) => {
  const stealPicture = () => {
    const { picture } = fetchedUser
    setMyUser((user) => ({ ...user, picture }))
  }

  const stealTitle = () => {
    const { title } = fetchedUser.name
    setMyUser((user) => ({ ...user, name: { ...user.name, title } }))
  }

  const stealFirstName = () => {
    const { first } = fetchedUser.name
    setMyUser((user) => ({ ...user, name: { ...user.name, first } }))
  }

  const stealLastName = () => {
    const { last } = fetchedUser.name
    setMyUser((user) => ({ ...user, name: { ...user.name, last } }))
  }

  return (
    <Button.Group vertical>
      <Button secondary basic onClick={stealPicture}>
        Steal Picture
      </Button>
      <Button secondary basic onClick={stealTitle}>
        Steal Title
      </Button>
      <Button secondary basic onClick={stealFirstName}>
        Steal First Name
      </Button>
      <Button secondary basic onClick={stealLastName}>
        Steal Last Name
      </Button>
    </Button.Group>
  )
}

export default PanelButtons
