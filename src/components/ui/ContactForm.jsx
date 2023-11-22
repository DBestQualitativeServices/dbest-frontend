const ContactForm = ({data, onSubmit, buttonStatus}) => {

    return (
        <form
            onSubmit={async (e) => await onSubmit(e)}
            className={"grid flex-1 grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-[800px] bg-accent text-whiteShade mx-4 rounded-2xl p-16"}>
            <input
                type="submit"
                disabled
                onClick={() => {
                    return false;
                }}
                className="hidden"
            />
            {data.form.fields.map((field, index) => (
                <div key={field.id}
                     className={`${field.id === "message" ? "col-span-2" : "col-span-2 sm:col-span-1"} flex flex-col items-start justify-start mb-8`}>
                    <label
                        htmlFor={`input-${field.id}`}
                        className={"mb-4"}>{field.label}</label>
                    {field.id !== "message" ? (
                        <input
                            id={`input-${field.id}`} name={field.id}
                            placeholder={field.placeHolder}
                            className={`appearance-none text-darkShade w-full focus:ring focus:ring-[2px] rounded-md py-2 px-4 focus:outline-none focus:ring-doubleDarkAccent`}
                        />
                    ) : (
                        <textarea
                            rows={4}
                            id={`input-${field.id}`} name={field.id}
                            placeholder={field.placeHolder}
                            className={`h-[140px] appearance-none text-darkShade w-full focus:ring focus:ring-[2px] rounded-md py-2 px-4 focus:outline-none focus:ring-doubleDarkAccent`}
                        />
                    )}
                </div>
            ))}
            <div
                className={"w-full col-span-2 text-phoneSmall sm:text-pcSmall font-thin mb-4"}>{data.form.info}</div>
            <div>
                <button type="submit"
                        disabled={buttonStatus}
                        className={`bg-darkAccent px-4 py-3 rounded-md`}>{data.form.button}</button>
            </div>
        </form>
    )
}

export default ContactForm