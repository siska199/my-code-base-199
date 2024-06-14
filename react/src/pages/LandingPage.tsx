import Button from "@components/ui/Button"

const LandingPage = () => {
    return (
        <article className="h-[75vh] flex items-center">
            <div className="w-full md:w-[50rem] flex flex-col justify-center items-center mx-auto my-auto ">
                <h4 className="font-bold text-center ">
                    Empowering Frontend Developers,
                    <br />One Codebase at a Time.
                </h4>
                <p className="text-gray text-body-large text-center">
                    Offering a vast array of customizable code snippets and detailed guidelines, Codebase 199 revolutionizes frontend development, enabling developers to create robust and scalable applications with ease and efficiency.                </p>
                <div className="flex w-full md:w-auto gap-4 mt-4">
                    <Button customeElement={"link"} variant={"solid-primary"} className="min-w-[7rem]" to={"/docs"} label={'Get Sarted'} />
                    <Button customeElement={"link"} variant={"solid-white"} className="min-w-[7rem]" to={"https://github.com/siska199/my-code-base-199"} label={'Github'} target="_blank" />
                </div>
            </div>
        </article>
    )
}

export default LandingPage