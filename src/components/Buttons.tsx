export const PrimaryButton = (props: any) => {
    return (
        <a
          className="btn-rounded-primary"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >{props.children}</a>
    )
}

export const SecondaryButton = (props: any) => {
  return (
        <a
          className="btn-rounded-secondary"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >{props.children}</a>
  )
}