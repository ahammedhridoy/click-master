import { ChangeEvent, useEffect, useState } from "react";
import "./popup.css";
import icon from "/icon.png";
import browser from "webextension-polyfill";
import { storage } from "../utils";

export default function () {
  const [version, setVersion] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [realistic, setRealistic] = useState<boolean>(false);
  const [nextAutoClick, setNextAutoClick] = useState<boolean>(false);
  const [sameSeat, setSameSeat] = useState<boolean>(false);
  const [maxTicket, setMaxTicket] = useState<string>("6");

  useEffect(() => {
    const getStorageData = async () => {
      const { maxTicket, nextAutoClick, realistic, sameSeat } =
        await storage.get([
          "nextAutoClick",
          "realistic",
          "sameSeat",
          "maxTicket",
        ]);
      setRealistic(realistic);
      setSameSeat(sameSeat);
      setNextAutoClick(nextAutoClick);
      setMaxTicket(maxTicket);
      await browser.runtime.sendMessage({ change: true });
    };
    return () => {
      getStorageData();
    };
  }, [realistic, nextAutoClick, sameSeat, maxTicket]);
  /** initial gets */

  useEffect(() => {
    const { version, name } = browser.runtime.getManifest();
    setVersion(version);
    setName(name);

    const initalGet = async () => {
      const { maxTicket, nextAutoClick, realistic, sameSeat } =
        await storage.get([
          "nextAutoClick",
          "realistic",
          "sameSeat",
          "maxTicket",
        ]);
      setRealistic(realistic);
      setSameSeat(sameSeat);
      setNextAutoClick(nextAutoClick);
      setMaxTicket(maxTicket);
    };
    initalGet();
  }, []);
  return (
    <div className="w-[400px] h-full bg-gray-900 text-white p-2">
      <div className="flex justify-center items-center flex-col gap-2 mb-5">
        <img src={icon} alt="logo" className="w-14" />
        <h1 className="text-2xl font-semibold">{name}</h1>
      </div>
      <div className="flex flex-col gap-4 justify-start items-center m-2 p-4 rounded-xl shadow-2xl bg-gray-800 backdrop-blur-3xl backdrop:blur-3xl text-base">
        <div className="flex w-full justify-between items-center ">
          <label htmlFor="maxTicket" className="font-mono">
            Select Max ticket
          </label>
          <select
            id="maxTicket"
            className="w-32 bg-gray-900 text-white border-2 border-gray-400 py-0.5 px-4 text-center"
            // defaultValue={maxTicket}
            value={maxTicket}
            onChange={async (e: ChangeEvent<HTMLSelectElement>) => {
              setMaxTicket(e.target.value);
              await storage.set("maxTicket", e.target.value);
            }}
          >
            <option>Select</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full justify-between items-center">
          <label
            htmlFor=""
            className="font-mono relative inline-flex items-center cursor-pointer"
          >
            Realistic Click
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={realistic}
              onChange={async (e) => {
                setRealistic((state) => !state);
                await storage.set("realistic", e.target.checked);
              }}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex w-full justify-between items-center">
          <label
            htmlFor=""
            className="font-mono relative inline-flex items-center cursor-pointer"
          >
            Same Seat Type
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={async (e) => {
                setSameSeat((state) => !state);
                await storage.set("sameSeat", e.target.checked);
              }}
              checked={sameSeat}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex w-full justify-between items-center">
          <label
            htmlFor=""
            className="font-mono relative inline-flex items-center cursor-pointer"
          >
            "Next" Button Auto-Click
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={async (e) => {
                await storage.set("nextAutoClick", e.target.checked);
                setNextAutoClick((state) => !state);
              }}
              checked={nextAutoClick}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <p className="text-center text-gray-400 my-2">
        Version: <strong>{version}</strong>
      </p>
    </div>
  );
}
