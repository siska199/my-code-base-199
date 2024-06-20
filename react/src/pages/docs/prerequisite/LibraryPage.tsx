import Badge from "@components/ui/Badge";
import Button from "@components/ui/Button";
import CodeBlock from "@components/ui/CodeBlock";
import List from "@components/ui/List";
import ProgressStep from "@components/ui/ProgressStep";

const LibraryPage = () => {
  const listLibrary =[
    {
      title:'Create your react project using vite',
      caption : <CodeBlock codeString={'npm create vite@latest'}/>
    },
    {
      title:<>Install tailwind library you can see the step in this <Button label="link" customeElement="link" to={"https://tailwindcss.com/docs/guides/create-react-app"} target="_blank"/></>,
      caption :<List
      items={[
        {
          label :"tailwind.config.js :",
          content : <>For tailwind configuration that we use for create some component you can see in  <Button label="here" customeElement="link" to={"http://localhost:5173/docs/prerequisite/tailwind-config"} target="_blank"/></>
        },
        {
          label :"css file:",
          content : <>CSS file that we use  for create some component you can see in  <Button label="here" customeElement="link" to={"http://localhost:5173/docs/prerequisite/css-file"} target="_blank"/></>
        },
      ]}
      />
    },
    {
      title :'Install this below library because mostly component that created uing cva',
      caption : <>
      <CodeBlock codeString={`npm i class-variance-authority
npm i clsx
npm i tailwind-merge`}/>
        <div>
          <p>Make sure also you have <Badge label={'cn'} variant={"soft-gray"}/> function that you can see in <Button label="here" customeElement="link" to={"http://localhost:5173/docs/prerequisite/helper-function"} target="_blank"/></p>
        </div>
      </>
    },
    {
      title :'Install vite-tsconfig-paths for create absolute path',
      caption : <div className="flex flex-col gap-2">
        <CodeBlock codeString={'npm i vite-tsconfig-paths'}/>
        <div className="flex flex-col gap-2">
          <p>Add <span className="italic">tsconfigPaths()</span> object plugins in file <Badge label={'vite.config.js'} variant={"soft-gray"}/> </p>
          <CodeBlock codeString={'plugins: [..., tsconfigPaths()],'}/>
        </div>
        <div className="flex flex-col gap-2">
          <p>Add This in object compilerOptions in file <Badge label={'tsconfig.json'} variant={"soft-gray"}/> </p>
          <CodeBlock codeString={`"baseUrl": "./src",
"paths" : {
  "@*": ["./*"],
},`}/>
        </div>
      </div>
    },
    {
      title :'Install vite-plugin-svgr plugin for easily using svg icon so you can dynamically change the color of svg icon without downloading the different color of the same icon',
      caption : <div>
          <CodeBlock codeString={'npm i vite-plugin-svgr'}/>
          <div>
            <p>Add <span className="italic">svgr()</span> object plugins in file <Badge label={'vite.config.js'} variant={"soft-gray"}/> </p>
            <CodeBlock codeString={`plugins: [..., svgr(),]`}/>
          
          </div>
          <div>
            <p>Add this css in file <Badge label={'index.css'} variant={"soft-gray"}/></p>
            <CodeBlock codeString={`/* FOR SVG ICON set color dinamically */
.icon-white path { @apply stroke-white }
.icon-white-fill path { @apply fill-white  }

.icon-black path { @apply stroke-black }
.icon-black-fill path { @apply fill-black  }

.icon-gray path { @apply stroke-gray }
.icon-gray-fill path { @apply fill-gray }

.icon-primary path { @apply stroke-primary }
.icon-primary-fill path { @apply fill-primary  }

.icon-error path { @apply stroke-error }
.icon-error-fill path {  @apply fill-error }

.icon-warning path { @apply stroke-warning}
.icon-warning-fill path { @apply fill-warning }

.icon-success path { @apply  stroke-success}
.icon-success-fill path { @apply  fill-success}`}/>
          </div>
      </div>
    },
    {
      title : 'Install react-date-picker library for creating component InputDate',
      caption : <CodeBlock codeString={'npm i react-datepicker'}/>
    },
    {
      title : 'Install react-syntax-highlighter library for creating CodeBlock',
      caption : <CodeBlock codeString={'npm i react-syntax-highlighter'}/>
    }
  ]
  return (
    <>
      <h4 className="font-bold">Library Installed</h4>
      <ProgressStep type="number" listStep={listLibrary} variant="vertical" />
    </>

  );
};

export default LibraryPage;