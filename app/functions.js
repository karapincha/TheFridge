import differenceInSeconds from 'date-fns/differenceInSeconds'

/*
 * Get time difference in seconds
 */
export const getTimeDifference = (startTime, endTime) => {
  return Math.max(differenceInSeconds(new Date(startTime), endTime), 0)
}

/*
 * Show toast error message
 */
export const showToast = (message, hook, icon = null, type = 'error') => {
  hook(message, {
    icon,
    appearance: type,
    autoDismiss: true,
    autoDismissTimeout: 3000,
    placement: 'bottom-center',
  })
}

/*
 * Get random emoji
 */
export const randomEmoji = type => {
  const errorEmojis = ['😫', '🤯', '🙄', '🥴', '👎', '🤦', '🙅‍♂️']
  const successEmojis = ['🎉', '😍', '🥰', '🥺', '🎊', '🍽']

  if (type === 'error') {
    return errorEmojis[Math.floor(Math.random() * errorEmojis.length)]
  }

  if (type === 'success') {
    return successEmojis[Math.floor(Math.random() * errorEmojis.length)]
  }
}
