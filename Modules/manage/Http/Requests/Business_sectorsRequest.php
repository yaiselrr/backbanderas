<?php


namespace Modules\manage\Http\Requests;


use Ronu\RestGenericClass\Core\Requests\BaseFormRequest;

class Business_sectorsRequest extends BaseFormRequest
{

    const PATH_RULE=__DIR__ . '/../../Rules/Business_sectorsRule.php';
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return $this->parseRules(self::PATH_RULE);
    }

}
