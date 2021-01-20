import { useState } from 'react';
import { useRifm, } from 'rifm'

const TryRifm = () => {
  const [number, setNumber] = useState('');
  const [lowercase, setLowercase] = useState('');
  const [uppercase, setUppercase] = useState('');
  const [capitalized, setCapitalized] = useState('');
  const [latinLetters, setLatinLetters] = useState('');
  const [comment, setComment] = useState('');

  const meString = "JC is the best. I can't even begin to compare to his awesomeness. I'm thankful that I was born in the same era as such genius. Everyday I wake up and resolve myself to work harder so that one day I can be 1% as good as him."

  const { value: numValue, onChange: onChangeNum } = useRifm({
    accept: /[\d,.]+/g,
    format: v => (v.match(/\d+[.,]?\d*/g) || []).join(""),
    replace: v => v.replace(",", "."),
    value: number,
    onChange: setNumber,
  })

  const { value: lowercaseValue, onChange: onChangeLowercase } = useRifm({
    accept: /./g,
    format: v => v,
    replace: v => v.toLowerCase(),
    value: lowercase,
    onChange: setLowercase,
  })

  const { value: uppercaseValue, onChange: onChangeUppercase } = useRifm({
    accept: /./g,
    format: v => v,
    replace: v => v.toUpperCase(),
    value: uppercase,
    onChange: setUppercase,
  })

  const { value: capitalizeValue, onChange: onChangeCapitalize } = useRifm({
    accept: /./g,
    format: v => v,
    replace: v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase(),
    value: capitalized,
    onChange: setCapitalized,
  })

  const { value: latinValue, onChange: onChangeLatin } = useRifm({
    accept: /[a-zA-Z]/g,
    format: v => (v.match(/[a-zA-Z]/g) || []).join(""),
    replace: v => v,
    value: latinLetters,
    onChange: setLatinLetters,
  })

  const { value: meValue, onChange: onChangeMe } = useRifm({
    accept: /./g,
    format: v => v,
    replace: v => meString.slice(0, v.length),
    value: comment,
    onChange: setComment,
  })

  return (
    <div className="mt-20">
      <label htmlFor="dotNumId">Mandatory dot (even if user enters comma) as floating point</label>
      <input type="text" value={numValue} onChange={onChangeNum} name="dotNum" id="dotNumId" />
      <label htmlFor="lowercaseId">Lower case</label>
      <input type="text" value={lowercaseValue} onChange={onChangeLowercase} name="lowercase" id="lowercaseId" />
      <label htmlFor="uppercaseId">Upper case</label>
      <input type="text" value={uppercaseValue} onChange={onChangeUppercase} name="uppercase" id="uppercaseId" />
      <label htmlFor="capitalizeId">Capital first letter</label>
      <input type="text" value={capitalizeValue} onChange={onChangeCapitalize} name="capitalize" id="capitalizeId" />
      <label htmlFor="latinId">Allow latin letters only</label>
      <input type="text" value={latinValue} onChange={onChangeLatin} name="latin" id="latinId" />
      <label htmlFor="meId">Leave a comment about me</label>
      <input type="text" value={meValue} onChange={onChangeMe} name="me" id="meId" />
    </div>
  );
}

export default TryRifm;