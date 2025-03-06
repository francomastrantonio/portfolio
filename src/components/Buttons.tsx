export default function PrimaryButton(url: string, value: string){
    return (
        <a
        className="btn-rounded-primary"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >{value}</a>
    )
}