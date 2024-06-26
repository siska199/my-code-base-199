import { TBasePropsInput } from '@/types/ui/index';
import { IconClose, IconEye, IconEyeClose } from "@assets/icons";
import Container from "@components/ui/Container";
import HelperMessage from "@components/ui/HelperMessage";
import { isEmptyValue } from '@lib/utils/helper';
import clsx from "clsx";
import { useState } from "react";

export interface TPropsInput<TInput,> extends TBasePropsInput {
    children: React.ReactNode | ((attrsInput: TInput) => React.ReactNode);
    disabled?: boolean;
    name?: string;
    type?: string;
    onlyContainer?: boolean;
    isClerable?: boolean;
    value?: any;
    onChange?: (e: any) => void;
    childrenOverlay?: React.ReactNode;
    isNotUsingDefaultStyle?: {
        input?: boolean
    };
    onCustomeClearHandler?: () => void;
    customeClearValue?: string
}

const ContainerInput = <TInput,>(props: TPropsInput<TInput>) => {
    const { name, children, onCustomeClearHandler, customeClearValue, isNotUsingDefaultStyle, childrenOverlay, label, variant = "v1", isClerable = false, type, onlyContainer = false, errorMessage, customeElement, disabled, customeClass, value, onChange, ...attrsInput } = props;
    const [dynamicType, setDynamicType] = useState(type)
    console.log("label: ", label, variant)
    const className = clsx({
        "peer w-full shrink !outline-none border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-400": !isNotUsingDefaultStyle?.input,
        "!bg-disabled": disabled,
        [customeClass?.input || '']: customeClass?.input,
        "px-4": customeElement?.preEnd,
        "pr-4 pl-1": customeElement?.preStart
    })

    const handleToggleTypePassword = () => {
        setDynamicType(dynamicType === "password" ? "text" : "password")
    }

    const handleOnClearValue = () => {

        onCustomeClearHandler ? onCustomeClearHandler() : onChange && onChange({
            target: {
                name: name || "",
                value: Array.isArray(value) ? [] : ""
            }
        })
    }


    return (
        <>
            {/* Container input lv1 : ciV4 */}
            <Container className={`${customeClass?.ciV4} relative flex flex-col gap-2`}>
                {/* Container input lv1 : ciV3 */}
                <section className={`${customeClass?.ciV3} flex flex-col gap-2 w-full`}>
                    {label && !["v2", "v6"]?.includes(variant) && (
                        <label htmlFor={name} className={clsx({
                            "font-medium w-fit": true,
                            "absolute top-[-0.65rem] left-[0.45rem] text-body-small bg-white px-1 z-[10]": variant === "v4"
                        })}>{label}</label>
                    )}
                    {/* Container input lv1 : ciV2 */}
                    {
                        onlyContainer && typeof (children) !== "function" ? children : <div className={clsx(
                            "bg-white flex flex-nowrap items-center gap-2 text-body-base border border-input rounded-lg focus-within:ring-4  w-full ",
                            {
                                "!bg-disabled !border": disabled,
                                "focus-within:ring-primary-200 focus-within:!border-primary": !errorMessage,
                                "border-error focus-within:!ring-error-200 focus-within:!border-error": errorMessage,
                                "!rounded-[5rem]": variant === "v3",
                                "!border-t-0 !border-l-0 !border-r-0 !rounded-none focus-within:!ring-0": variant === "v5",
                                [customeClass?.ciV2 || ""]: customeClass?.ciV2,
                                "px-3 py-2 ": !customeElement?.preStart && !customeElement?.preEnd,
                                "py-4 focus-within:pb-2 focus-within:pt-5":variant==="v6",
                                "pb-2 pt-5 ":variant==="v6" && value,
                                "!px-0": variant === "v5",
                                "overflow-hidden": customeElement?.preStart || customeElement?.preEnd,
                            }
                        )}>
                            {
                                customeElement?.preStart && <div className={clsx({
                                    "hidden": true,
                                    "shrink-0 !flex bg-gray-100 p-2 ": customeElement?.preStart,
                                })} >
                                    {customeElement?.preStart}
                                </div>
                            }

                            <div className={clsx({
                                "hidden": true,
                                "shrink-0 !flex ": customeElement?.start,
                            })} >
                                {customeElement?.start}
                            </div>

                            {/* Container input lv1 : ciV1 */}
                            <div className={`flex flex-col w-full relative ${customeClass?.ciV1}`}>
                                {
                                    typeof (children) === "function" ? <>
                                        {children({ ...attrsInput as TInput, className, name, type: dynamicType, disabled, value, onChange })}
                                        {label && ["v2", "v6"].includes(variant) && (
                                            <label
                                                id="floating-label"
                                                htmlFor={name}
                                                className={clsx(
                                                    {
                                                        "font-medium absolute left-0 text-sm text-gray duration-300 transform -translate-y-5 bg-white px-1 scale-75 top-0 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:bg-white  z-10": true,
                                                        [customeClass?.label||'']:customeClass?.label,
                                                        ["peer-placeholder-shown:ml-[0px] peer-focus:ml-[-35px] ml-[-35px]"]: customeElement?.start,
                                                        "ml-[-0.25rem] ": !customeElement?.start,

                                                    }
                                                )}
                                            >
                                                {label}
                                            </label>
                                        )}
                                    </> : children

                                }

                            </div>
                            {isClerable && !isEmptyValue(customeClearValue) && <IconClose className='cursor-pointer' onClick={handleOnClearValue} />}

                            <div className={clsx({
                                "hidden": true,
                                "shrink-0 !flex": customeElement?.end
                            })} >
                                {customeElement?.end}
                            </div>
                            {
                                customeElement?.preEnd && <div className={clsx({
                                    "hidden": true,
                                    "shrink-0 !flex bg-gray-100 p-2 ": customeElement?.preEnd,
                                })} >
                                    {customeElement?.preEnd}
                                </div>
                            }
                            {type === "password" && <div onClick={handleToggleTypePassword} className="cursor-pointer-custome ">
                                {
                                    dynamicType === "password" ? <IconEye /> : <IconEyeClose />
                                }
                            </div>}
                        </div>
                    }
                </section>
                {childrenOverlay}
                <HelperMessage variant={"error"} message={errorMessage} />
            </Container>
        </>
    );
}

export default ContainerInput;
