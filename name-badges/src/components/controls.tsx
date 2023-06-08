type ControlPanelProps = {
  name: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>   //(event : HTMLElement) => void
}



const ControlPanel = ({ name, onChange }: ControlPanelProps): JSX.Element => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
