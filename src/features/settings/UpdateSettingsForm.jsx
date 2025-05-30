import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { FormRow } from "../cabins/CreateCabinForm";
import { UseSettings } from "./UseSettings";
import Spinner from "../../ui/Spinner";
import { UseUpdateSetting } from "./UseUpdateSetting";
function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakFastPrice,
    } = {},
  } = UseSettings();
  const { updateSetting, isUpdating } = UseUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow>
        <label>Minimum nights/booking</label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
             disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <label>Maximum nights/booking</label>

        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
            onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <label>Maximum guests/booking</label>

        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
               disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <label>Breakfast Price</label>

        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakFastPrice}
            onBlur={(e) => handleUpdate(e, "breakFastPrice")}
               disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
