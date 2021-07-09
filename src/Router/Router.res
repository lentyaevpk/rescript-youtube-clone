@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()
  
  switch url.path {
    | list{} => <h1>{React.string("Home page")}</h1>
    | _ => <h1>{React.string("NO PAGE")}</h1>
  }
}
