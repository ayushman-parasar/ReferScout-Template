import React from "react";

import { Input } from "@bigbinary/neetoui";
import { Field, Form, Formik } from "formik";

const Profile = () => (
  <div className="w-full p-8" style={{ backgroundColor: "#f1f4ff" }}>
    <div className="mb-8 flex w-full items-center justify-between border-b-2 border-gray-200 pb-4">
      <h1 className="text-2xl font-bold">Edit profile</h1>
      <button
        className="inline-flex items-center rounded-md border border-transparent bg-blue-600 text-sm font-semibold leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none"
        type="button"
        style={{
          padding: "8px 20px 8px 20px",
        }}
        onClick={() => {}}
      >
        Refer now
      </button>
    </div>
    <div
      className="mb-16 mt-4 w-full rounded"
      style={{
        backgroundColor: "#fff",
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingBottom: "32px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <text
          className="font-bold"
          style={{
            color: "#697388",
          }}
        >
          Personal Information
        </text>
      </div>
      <div
        className="flex items-center justify-between"
        style={{
          paddingBottom: "32px",
        }}
      >
        <div className="flex items-center">
          <img
            alt="profile"
            className="h-20 w-20"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            style={{ borderRadius: "40px", marginRight: "30px" }}
          />
          <div className="flex">
            <button
              className="items-center rounded-md border border-transparent bg-blue-600 text-xs leading-4 text-white "
              style={{ padding: "4px 12px 4px 12px" }}
            >
              Update Photo
            </button>
            <button
              className="items-center rounded-md border border-gray-400 text-xs leading-4"
              style={{
                marginLeft: "15px",
                padding: "4px 12px 4px 12px",
                borderColor: "#eee",
                borderWidth: "1px",
                borderStyle: "solid",
                color: "#777",
              }}
            >
              Remove Photo
            </button>
          </div>
        </div>
        <img
          alt="Other"
          src="/ProfileBadge.png"
          style={{ width: "370px", height: "120px" }}
        />
      </div>
      <Formik
        initialValues={{
          field1: "",
          field2: "",
          field3: "",
          field4: "",
          field5: "",
          field6: "",
          field7: "",
          field8: "",
        }}
        onSubmit={() => {}}
      >
        <Form className="">
          <div className="flex w-full items-center justify-between">
            <div
              className="w-1/2 space-y-6 pr-2"
              style={{ paddingRight: "16px" }}
            >
              <Field as={Input} label="First Name" name="field1" />
              <Field as={Input} label="Email" name="field1" />
              <Field as={Input} label="Employee ID" name="field1" />
              <Field as={Input} label="Joining Date" name="field1" />
            </div>
            <div className="w-1/2 space-y-6" style={{ paddingLeft: "16px" }}>
              <Field as={Input} label="Last Name" name="field1" />
              <Field as={Input} label="Phone No." name="field1" />
              <Field as={Input} label="Department" name="field1" />
              <div style={{ paddingTop: "22px" }}>
                <div
                  className="flex items-center justify-center rounded-md border"
                  style={{
                    borderColor: "#1674F8",
                    height: "32px",
                  }}
                >
                  <img src="/linkedin.svg" />
                  <text
                    className="text-xs"
                    style={{ color: "#1674F8", paddingLeft: "10px" }}
                  >
                    Connect with LinkedIn
                  </text>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
    <div
      className="my-4 w-full rounded"
      style={{
        backgroundColor: "#fff",
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingBottom: "32px",
      }}
    >
      <div
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <text
          className="font-bold"
          style={{
            color: "#697388",
          }}
        >
          Change Password
        </text>
      </div>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={() => {}}
      >
        <Form className="">
          <div className="flex w-full justify-between">
            <div className="w-1/2 space-y-4" style={{ paddingRight: "16px" }}>
              <Field
                as={Input}
                label="Old Password"
                name="currentPassword"
                type="password"
              />
              <Field
                as={Input}
                label="New Password"
                name="newPassword"
                type="password"
              />
            </div>
            <div className="w-1/2 " style={{ paddingLeft: "16px" }}>
              <div style={{ height: "70px", width: "10px" }} />
              <Field
                as={Input}
                label="Re-Enter Password"
                name="confirmPassword"
                type="password"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
);

export default Profile;
