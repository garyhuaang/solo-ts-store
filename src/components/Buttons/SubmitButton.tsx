import { useNavigation } from 'react-router-dom'
import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'

function SubmitButton({
  className,
  text,
}: {
  className?: string
  text: string
}) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Button
      type="submit"
      variant="default"
      className={className}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span>
          <ReloadIcon />
          Submitting
        </span>
      ) : (
        text
      )}
    </Button>
  )
}

export default SubmitButton
