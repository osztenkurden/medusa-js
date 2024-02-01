import { AxiosAdapter, AxiosError, AxiosRequestHeaders, AxiosInstance } from 'axios';
import { AdminCreateUserRequest, AdminUpdateUserRequest, AdminPostInvitesReq, StorePostCustomersCustomerAddressesReq, StoreCustomersRes, StorePostCustomersCustomerAddressesAddressReq, StorePostAuthReq, StoreAuthRes, StoreGetAuthEmailRes, StoreBearerAuthRes, StorePostCartsCartLineItemsReq, StoreCartsRes, StorePostCartsCartLineItemsItemReq, StorePostCartsCartShippingMethodReq, StoreCompleteCartRes, StorePostCartReq, StorePostCartsCartPaymentSessionReq, StorePostCartsCartReq, StorePostCartsCartPaymentSessionUpdateReq, StoreCollectionsRes, StoreGetCollectionsParams, StoreCollectionsListRes, StoreCustomersListPaymentMethodsRes, StorePostCustomersReq, StorePostCustomersCustomerReq, StoreGetCustomersCustomerOrdersParams, StoreCustomersListOrdersRes, StorePostCustomersResetPasswordReq, StorePostCustomersCustomerPasswordTokenReq, StoreGiftCardsRes, StoreOrderEditsRes, StorePostOrderEditsOrderEditDecline, StoreOrdersRes, StoreGetOrdersParams, StorePostCustomersCustomerOrderClaimReq, StorePostCustomersCustomerAcceptClaimReq, StoreGetPaymentCollectionsParams, StorePaymentCollectionsRes, StorePostPaymentCollectionsBatchSessionsAuthorizeReq, StorePostPaymentCollectionsBatchSessionsReq, StorePaymentCollectionSessionsReq, StorePaymentCollectionsSessionRes, StoreGetProductCategoriesCategoryParams, StoreGetProductCategoriesCategoryRes, StoreGetProductCategoriesParams, StoreGetProductCategoriesRes, StoreGetProductTagsParams, StoreProductTagsListRes, StoreGetProductTypesParams, StoreProductTypesListRes, StoreVariantsRes, StoreGetVariantsParams, StoreVariantsListRes, StoreProductsRes, StorePostSearchReq, StorePostSearchRes, StoreGetProductsParams, StoreProductsListRes, StoreRegionsListRes, StoreRegionsRes, StoreReturnReasonsRes, StoreReturnReasonsListRes, StorePostReturnsReq, StoreReturnsRes, StoreShippingOptionsListRes, StoreGetShippingOptionsParams, StorePostSwapsReq, StoreSwapsRes, AdminAuthRes, AdminPostAuthReq, AdminBearerAuthRes, AdminPostBatchesReq, AdminBatchJobRes, AdminGetBatchParams, AdminBatchJobListRes, AdminPostCollectionsReq, AdminCollectionsRes, AdminPostCollectionsCollectionReq, AdminCollectionsDeleteRes, AdminGetCollectionsParams, AdminCollectionsListRes, AdminPostProductsToCollectionReq, AdminDeleteProductsFromCollectionReq, AdminDeleteProductsFromCollectionRes, AdminGetCurrenciesParams, AdminCurrenciesListRes, AdminPostCurrenciesCurrencyReq, AdminCurrenciesRes, AdminPostCustomerGroupsReq, AdminCustomerGroupsRes, AdminGetCustomerGroupsGroupParams, AdminPostCustomerGroupsGroupReq, AdminCustomerGroupsDeleteRes, AdminGetCustomerGroupsParams, AdminCustomerGroupsListRes, AdminPostCustomerGroupsGroupCustomersBatchReq, AdminDeleteCustomerGroupsGroupCustomerBatchReq, AdminGetCustomersParams, AdminCustomersListRes, AdminPostCustomersReq, AdminCustomersRes, AdminPostCustomersCustomerReq, AdminDiscountsRes, AdminPostDiscountsReq, AdminPostDiscountsDiscountReq, AdminPostDiscountsDiscountDynamicCodesReq, AdminDiscountsDeleteRes, AdminGetDiscountsParams, AdminDiscountsListRes, AdminPostDiscountsDiscountConditions, AdminPostDiscountsDiscountConditionsParams, AdminPostDiscountsDiscountConditionsCondition, AdminPostDiscountsDiscountConditionsConditionParams, AdminGetDiscountsDiscountConditionsConditionParams, AdminDiscountConditionsRes, AdminPostDiscountsDiscountConditionsConditionBatchReq, AdminPostDiscountsDiscountConditionsConditionBatchParams, AdminDeleteDiscountsDiscountConditionsConditionBatchReq, AdminPostDraftOrdersReq, AdminDraftOrdersRes, AdminPostDraftOrdersDraftOrderLineItemsReq, AdminDraftOrdersDeleteRes, AdminGetDraftOrdersParams, AdminDraftOrdersListRes, AdminPostDraftOrdersDraftOrderRegisterPaymentRes, AdminPostDraftOrdersDraftOrderReq, AdminPostDraftOrdersDraftOrderLineItemsItemReq, AdminPostGiftCardsReq, AdminGiftCardsRes, AdminPostGiftCardsGiftCardReq, AdminGiftCardsDeleteRes, AdminGetGiftCardsParams, AdminGiftCardsListRes, AdminGetInventoryItemsItemParams, AdminInventoryItemsRes, AdminPostInventoryItemsInventoryItemReq, AdminPostInventoryItemsInventoryItemParams, AdminInventoryItemsDeleteRes, AdminPostInventoryItemsReq, AdminPostInventoryItemsParams, AdminGetInventoryItemsParams, AdminInventoryItemsListWithVariantsAndLocationLevelsRes, AdminPostInventoryItemsItemLocationLevelsLevelReq, AdminPostInventoryItemsItemLocationLevelsLevelParams, AdminPostInventoryItemsItemLocationLevelsReq, AdminPostInventoryItemsItemLocationLevelsParams, AdminGetInventoryItemsItemLocationLevelsParams, AdminInventoryItemsLocationLevelsRes, AdminPostInvitesInviteAcceptReq, AdminInviteDeleteRes, AdminListInvitesRes, AdminPostNotesReq, AdminNotesRes, AdminPostNotesNoteReq, AdminNotesDeleteRes, AdminGetNotesParams, AdminNotesListRes, AdminGetNotificationsParams, AdminNotificationsListRes, AdminPostNotificationsNotificationResendReq, AdminNotificationsRes, GetOrderEditsOrderEditParams, AdminOrderEditsRes, GetOrderEditsParams, AdminOrderEditsListRes, AdminPostOrderEditsReq, AdminPostOrderEditsOrderEditReq, AdminOrderEditDeleteRes, AdminPostOrderEditsEditLineItemsReq, AdminOrderEditItemChangeDeleteRes, AdminPostOrderEditsEditLineItemsLineItemReq, AdminPostOrdersOrderReq, AdminOrdersRes, AdminGetOrdersParams, AdminOrdersListRes, AdminPostOrdersOrderRefundsReq, AdminPostOrdersOrderFulfillmentsReq, AdminPostOrdersOrderShipmentReq, AdminPostOrdersOrderReturnsReq, AdminPostOrdersOrderShippingMethodsReq, AdminPostOrdersOrderSwapsReq, AdminPostOrdersOrderSwapsSwapFulfillmentsReq, AdminPostOrdersOrderSwapsSwapShipmentsReq, AdminPostOrdersOrderClaimsReq, AdminPostOrdersOrderClaimsClaimReq, AdminPostOrdersOrderClaimsClaimFulfillmentsReq, AdminPostOrdersOrderClaimsClaimShipmentsReq, AdminGetPaymentCollectionsParams, AdminPaymentCollectionsRes, AdminUpdatePaymentCollectionsReq, AdminPaymentCollectionDeleteRes, GetPaymentsParams, AdminPaymentRes, AdminPostPaymentRefundsReq, AdminRefundRes, AdminPostPriceListsPriceListReq, AdminPriceListRes, AdminPostPriceListsPriceListPriceListReq, AdminPriceListDeleteRes, AdminGetPriceListPaginationParams, AdminPriceListsListRes, AdminGetPriceListsPriceListProductsParams, AdminPriceListsProductsListRes, AdminPostPriceListPricesPricesReq, AdminDeletePriceListPricesPricesReq, AdminPriceListDeleteBatchRes, AdminPriceListDeleteProductPricesRes, AdminPriceListDeleteVariantPricesRes, AdminDeletePriceListsPriceListProductsPricesBatchReq, AdminGetProductCategoryParams, AdminProductCategoriesCategoryRes, AdminPostProductCategoriesReq, AdminPostProductCategoriesCategoryReq, AdminGetProductCategoriesParams, AdminProductCategoriesListRes, AdminProductCategoriesCategoryDeleteRes, AdminDeleteProductCategoriesCategoryProductsBatchReq, AdminPostProductCategoriesCategoryProductsBatchReq, AdminGetProductTagsParams, AdminProductTagsListRes, AdminGetProductTypesParams, AdminProductTypesListRes, AdminPostProductsReq, AdminProductsRes, AdminPostProductsProductReq, AdminProductsDeleteRes, AdminGetProductsParams, AdminProductsListRes, AdminProductsListTypesRes, AdminProductsListTagsRes, AdminPostProductsProductMetadataReq, AdminPostProductsProductVariantsReq, AdminPostProductsProductVariantsVariantReq, AdminProductsDeleteVariantRes, AdminPostProductsProductOptionsReq, AdminPostProductsProductOptionsOption, AdminProductsDeleteOptionRes, AdminPublishableApiKeysRes, GetPublishableApiKeysParams, AdminPublishableApiKeysListRes, AdminPostPublishableApiKeysReq, AdminPostPublishableApiKeysPublishableApiKeyReq, AdminPublishableApiKeyDeleteRes, AdminPostPublishableApiKeySalesChannelsBatchReq, AdminDeletePublishableApiKeySalesChannelsBatchReq, GetPublishableApiKeySalesChannelsParams, AdminPublishableApiKeysListSalesChannelsRes, AdminPostRegionsReq, AdminRegionsRes, AdminPostRegionsRegionReq, AdminRegionsDeleteRes, AdminGetRegionsParams, AdminRegionsListRes, AdminPostRegionsRegionCountriesReq, AdminPostRegionsRegionFulfillmentProvidersReq, AdminGetRegionsRegionFulfillmentOptionsRes, AdminPostRegionsRegionPaymentProvidersReq, AdminReservationsRes, AdminGetReservationsParams, AdminReservationsListRes, AdminPostReservationsReq, AdminPostReservationsReservationReq, AdminReservationsDeleteRes, AdminPostReturnReasonsReq, AdminReturnReasonsRes, AdminPostReturnReasonsReasonReq, AdminReturnReasonsDeleteRes, AdminReturnReasonsListRes, AdminReturnsCancelRes, AdminPostReturnsReturnReceiveReq, AdminReturnsRes, AdminGetReturnsParams, AdminReturnsListRes, AdminSalesChannelsRes, AdminPostSalesChannelsReq, AdminPostSalesChannelsSalesChannelReq, AdminGetSalesChannelsParams, AdminSalesChannelsListRes, AdminSalesChannelsDeleteRes, AdminDeleteSalesChannelsChannelProductsBatchReq, AdminPostSalesChannelsChannelProductsBatchReq, AdminPostSalesChannelsChannelStockLocationsReq, AdminDeleteSalesChannelsChannelStockLocationsReq, AdminPostShippingOptionsReq, AdminShippingOptionsRes, AdminPostShippingOptionsOptionReq, AdminShippingOptionsDeleteRes, AdminGetShippingOptionsParams, AdminShippingOptionsListRes, AdminPostShippingProfilesReq, AdminShippingProfilesRes, AdminPostShippingProfilesProfileReq, AdminDeleteShippingProfileRes, AdminShippingProfilesListRes, AdminPostStockLocationsReq, AdminStockLocationsRes, AdminPostStockLocationsLocationReq, AdminStockLocationsDeleteRes, AdminGetStockLocationsParams, AdminStockLocationsListRes, AdminPostStoreReq, AdminStoresRes, AdminExtendedStoresRes, AdminPaymentProvidersList, AdminTaxProvidersList, AdminSwapsRes, AdminGetSwapsParams, AdminSwapsListRes, AdminGetTaxRatesTaxRateParams, AdminTaxRatesRes, AdminGetTaxRatesParams, AdminTaxRatesListRes, AdminPostTaxRatesReq, AdminPostTaxRatesParams, AdminPostTaxRatesTaxRateReq, AdminPostTaxRatesTaxRateParams, AdminPostTaxRatesTaxRateProductsReq, AdminPostTaxRatesTaxRateProductsParams, AdminPostTaxRatesTaxRateProductTypesReq, AdminPostTaxRatesTaxRateShippingOptionsReq, AdminPostTaxRatesTaxRateShippingOptionsParams, AdminDeleteTaxRatesTaxRateProductsReq, AdminDeleteTaxRatesTaxRateProductsParams, AdminDeleteTaxRatesTaxRateProductTypesReq, AdminDeleteTaxRatesTaxRateProductTypesParams, AdminDeleteTaxRatesTaxRateShippingOptionsReq, AdminDeleteTaxRatesTaxRateShippingOptionsParams, AdminTaxRatesDeleteRes, AdminUploadsRes, AdminDeleteUploadsReq, AdminDeleteUploadsRes, AdminPostUploadsDownloadUrlReq, AdminUploadsDownloadUrlRes, AdminResetPasswordTokenRequest, AdminResetPasswordRequest, AdminUserRes, AdminDeleteUserRes, AdminGetUsersParams, AdminUsersListRes, AdminGetVariantsParams, AdminVariantsListRes, AdminGetVariantParams, AdminVariantsRes, AdminGetVariantsVariantInventoryRes } from '@medusajs/medusa';
import { FindParams } from '@medusajs/medusa/dist/types/common';

/**
 * MedusaError is the base error for every other MedusaError
 */
declare class MedusaError extends Error {
    constructor();
    static factory(type: ErrorType): MedusaError;
}
declare enum ErrorType {
    "INVALID_REQUEST" = 0,
    "API" = 1,
    "AUTHENTICATION" = 2,
    "PERMISSION" = 3,
    "CONNECTION" = 4
}

/**
 * `KeyManager` holds API keys in state.
 */
declare class KeyManager {
    private publishableApiKey;
    /**
     * Set a publishable api key to be sent with each request.
     */
    registerPublishableApiKey(key: string): void;
    /**
     * Retrieve the publishable api key.
     */
    getPublishableApiKey(): string | null;
}
/**
 * Export singleton instance.
 */
declare const _default$1: KeyManager;

interface Config {
    baseUrl: string;
    maxRetries: number;
    apiKey?: string;
    publishableApiKey?: string;
    customHeaders?: Record<string, any>;
    axiosAdapter?: AxiosAdapter;
}
/**
 * @interface
 *
 * Options to pass to requests sent to custom API Routes
 */
interface RequestOptions {
    /**
     * The number of milliseconds before the request times out.
     */
    timeout?: number;
    /**
     * The number of times to retry a request before failing.
     */
    numberOfRetries?: number;
}
type RequestMethod = "DELETE" | "POST" | "GET";
declare class Client {
    private axiosClient;
    private config;
    constructor(config: Config);
    shouldRetryCondition(err: AxiosError, numRetries: number, maxRetries: number): boolean;
    normalizeHeaders(obj: object): Record<string, any>;
    normalizeHeader(header: string): string;
    requiresAuthentication(path: any, method: any): boolean;
    /**
     * Creates all the initial headers.
     * We add the idempotency key, if the request is configured to retry.
     * @param {object} userHeaders user supplied headers
     * @param {Types.RequestMethod} method request method
     * @param {string} path request path
     * @param {object} customHeaders user supplied headers
     * @return {object}
     */
    setHeaders(userHeaders: RequestOptions, method: RequestMethod, path: string, customHeaders?: Record<string, any>): AxiosRequestHeaders;
    /**
     * Creates the axios client used for requests
     * As part of the creation, we configure the retry conditions
     * and the exponential backoff approach.
     * @param {Config} config user supplied configurations
     * @return {AxiosInstance}
     */
    createClient(config: Config): AxiosInstance;
    /**
     * Axios request
     * @param method request method
     * @param path request path
     * @param payload request payload
     * @param options axios configuration
     * @param customHeaders custom request headers
     * @return
     */
    request(method: RequestMethod, path: string, payload?: Record<string, any>, options?: RequestOptions, customHeaders?: Record<string, any>): Promise<any>;
}

/**
 * `JwtTokenManager` holds JWT tokens in state.
 */
declare class JwtTokenManager {
    private adminJwt;
    private storeJwt;
    /**
     * Set a store or admin jwt token to be sent with each request.
     */
    registerJwt(token: string, domain: "admin" | "store"): void;
    /**
     * Retrieve the store or admin jwt token
     */
    getJwt(domain: "admin" | "store"): string | null;
}
/**
 * Export singleton instance.
 */
declare const _default: JwtTokenManager;

interface HTTPResponse {
    status: number;
    statusText: string;
    headers: Record<string, string> & {
        "set-cookie"?: string[];
    };
    config: any;
    request?: any;
}
type Response<T> = T & {
    response: HTTPResponse;
};
type ResponsePromise<T = any> = Promise<Response<T>>;
type NoUndefined<T> = T extends undefined ? never : T;
type CreateUserRolesEnum = NoUndefined<AdminCreateUserRequest["role"]>;
type CreateUserRoles = `${CreateUserRolesEnum}`;
/**
 * The details of the user to create.
 */
type AdminCreateUserPayload = Omit<AdminCreateUserRequest, "role"> | {
    role?: CreateUserRoles;
};
type UpdateUserRolesEnum = NoUndefined<AdminUpdateUserRequest["role"]>;
type UpdateUserRoles = `${UpdateUserRolesEnum}`;
/**
 * The details to update of the user.
 */
type AdminUpdateUserPayload = Omit<AdminUpdateUserRequest, "role"> & {
    role?: UpdateUserRoles;
};
type InviteUserRolesEnum = `${AdminPostInvitesReq["role"]}`;
type AdminPostInvitesPayload = Omit<AdminPostInvitesReq, "role"> & {
    role: InviteUserRolesEnum;
};
/**
 * The file(s) to upload.
 */
type AdminCreateUploadPayload = File | File[];

declare class BaseResource {
    client: Client;
    constructor(client: Client);
}

/**
 * This class is used to send requests to Address API Routes part of the [Store Customer API Routes](https://docs.medusajs.com/api/store#customers_postcustomers). All its method
 * are available in the JS Client under the `medusa.customers.addresses` property.
 *
 * All methods in this class require {@link AuthResource.authenticate | customer authentication}.
 */
declare class AddressesResource extends BaseResource {
    /**
     * Add an address to the logged-in customer's saved addresses.
     * @param {StorePostCustomersCustomerAddressesReq} payload - The address to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersRes>} Resolves to the customer's details, including the customer's addresses in the `shipping_addresses` attribute.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.addresses.addAddress({
     *   address: {
     *     first_name: "Celia",
     *     last_name: "Schumm",
     *     address_1: "225 Bednar Curve",
     *     city: "Danielville",
     *     country_code: "US",
     *     postal_code: "85137",
     *     phone: "981-596-6748 x90188",
     *     company: "Wyman LLC",
     *     province: "Georgia",
     *   }
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    addAddress(payload: StorePostCustomersCustomerAddressesReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Delete an address of the logged-in customer.
     * @param {string} address_id - The ID of the address to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersRes>} Resolves to the customer's details, including the customer's addresses in the `shipping_addresses` attribute.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.addresses.deleteAddress(addressId)
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    deleteAddress(address_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Update an address of the logged-in customer.
     * @param {string} address_id - The address's ID.
     * @param {StorePostCustomersCustomerAddressesAddressReq} payload - The attributes to update in the address.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersRes>} Resolves to the customer's details, including the customer's addresses in the `shipping_addresses` attribute.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.addresses.updateAddress(addressId, {
     *   first_name: "Gina"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    updateAddress(address_id: string, payload: StorePostCustomersCustomerAddressesAddressReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
}

/**
 * This class is used to send requests to [Store Auth API Routes](https://docs.medusajs.com/api/store#auth). All its method
 * are available in the JS Client under the `medusa.auth` property.
 *
 * The methods in this class allows you to manage a customer's session, such as login or log out.
 * You can send authenticated requests for a customer either using the Cookie header or using the JWT Token.
 * When you log the customer in using the {@link authenticate} method, the JS client will automatically attach the
 * cookie header in all subsequent requests.
 *
 * Related Guide: [How to implement customer profiles in your storefront](https://docs.medusajs.com/modules/customers/storefront/implement-customer-profiles).
 */
declare class AuthResource extends BaseResource {
    /**
     * Authenticate a customer using their email and password. If the customer is authenticated successfully, the cookie is automatically attached to subsequent requests sent with the JS Client.
     * @param {StorePostAuthReq} payload - The credentials of the customer to authenticate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreAuthRes>} Resolves to the customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.auth.authenticate({
     *   email: "user@example.com",
     *   password: "user@example.com"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    authenticate(payload: StorePostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<StoreAuthRes>;
    /**
     * Log out the customer and remove their authentication session. This method requires {@link AuthResource.authenticate | customer authentication}.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<void>} Resolves when customer is logged out successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.auth.deleteSession()
     * .then(() => {
     *   // customer logged out successfully
     * })
     */
    deleteSession(customHeaders?: Record<string, any>): ResponsePromise<void>;
    /**
     * Retrieve the details of the logged-in customer. Can also be used to check if there is an authenticated customer.
     * This method requires {@link AuthResource.authenticate | customer authentication}.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreAuthRes>} Resolves to the customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.auth.getSession()
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    getSession(customHeaders?: Record<string, any>): ResponsePromise<StoreAuthRes>;
    /**
     * Check if the email is already used by another registered customer. Can be used to validate a new customer's email.
     * @param {string} email - The email to check.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreGetAuthEmailRes>} Resolves to the result of the check.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.auth.exists("user@example.com")
     */
    exists(email: string, customHeaders?: Record<string, any>): ResponsePromise<StoreGetAuthEmailRes>;
    /**
     * Authenticate the customer and retrieve a JWT token to use for subsequent authenticated requests.
     * @param {AdminPostAuthReq} payload - The credentials of the customer to authenticate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreBearerAuthRes>} Resolves to the access token of the customer, if they're authenticated successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.auth.getToken({
     *   email: 'user@example.com',
     *   password: 'supersecret'
     * })
     * .then(({ access_token }) => {
     *   console.log(access_token);
     * })
     */
    getToken(payload: StorePostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<StoreBearerAuthRes>;
}

/**
 * This class is used to send requests to Line Item API Routes part of the [Store Cart API Routes](https://docs.medusajs.com/api/store#carts). All its method
 * are available in the JS Client under the `medusa.carts.lineItems` property.
 */
declare class LineItemsResource extends BaseResource {
    /**
     * Generate a Line Item with a given Product Variant and adds it to the Cart
     * @param {string} cart_id - The cart's ID.
     * @param {StorePostCartsCartLineItemsReq} payload - The line item to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the associated cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.lineItems.create(cart_id, {
     *   variant_id,
     *   quantity: 1
     * })
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    create(cart_id: string, payload: StorePostCartsCartLineItemsReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Update a line item's data.
     * @param {string} cart_id - The ID of the line item's cart.
     * @param {string} line_id - The ID of the line item to update.
     * @param {StorePostCartsCartLineItemsItemReq} payload - The data to update in the line item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the associated cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.lineItems.update(cartId, lineId, {
     *   quantity: 1
     * })
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    update(cart_id: string, line_id: string, payload: StorePostCartsCartLineItemsItemReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Delete a line item from a cart. The payment sessions will be updated and the totals will be recalculated.
     * @param {string} cart_id - The ID of the line item's cart.
     * @param {string} line_id - The ID of the line item to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the associated cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.lineItems.delete(cartId, lineId)
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    delete(cart_id: string, line_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
}

/**
 * This class is used to send requests to [Store Cart API Routes](https://docs.medusajs.com/api/store#carts). All its method
 * are available in the JS Client under the `medusa.carts` property.
 *
 * A cart is a virtual shopping bag that customers can use to add items they want to purchase.
 * A cart is then used to checkout and place an order.
 *
 * Related Guide: [How to implement cart functionality in your storefront](https://docs.medusajs.com/modules/carts-and-checkout/storefront/implement-cart).
 */
declare class CartsResource extends BaseResource {
    /**
     * An instance of {@link LineItemsResource} used to send requests to line-item-related routes part of the [Store Cart API Routes](https://docs.medusajs.com/api/store#carts).
     */
    lineItems: LineItemsResource;
    /**
     * Add a shipping method to the cart. The validation of the `data` field is handled by the fulfillment provider of the chosen shipping option.
     * @param {string} cart_id - The ID of the cart to add the shipping method to.
     * @param {StorePostCartsCartShippingMethodReq} payload - The shipping method to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.addShippingMethod(cartId, {
     *   option_id
     * })
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    addShippingMethod(cart_id: string, payload: StorePostCartsCartShippingMethodReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Complete a cart and place an order or create a swap, based on the cart's type. This includes attempting to authorize the cart's payment.
     * If authorizing the payment requires more action, the cart will not be completed and the order will not be placed or the swap will not be created.
     * An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
     * the response. If an error occurs during cart completion or the request is interrupted for any reason, the cart completion can be retried by passing the idempotency
     * key in the `Idempotency-Key` header.
     * @param {string} cart_id - The ID of the cart to complete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCompleteCartRes>} Resolves to the completion details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.complete(cartId)
     * .then(({ data, type }) => {
     *   console.log(data.id, type);
     * })
     */
    complete(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCompleteCartRes>;
    /**
     * Create a Cart. Although optional, specifying the cart's region and sales channel can affect the cart's pricing and
     * the products that can be added to the cart respectively. So, make sure to set those early on and change them if necessary, such as when the customer changes their region.
     * If a customer is logged in, make sure to pass its ID or email within the cart's details so that the cart is attached to the customer.
     * @param {StorePostCartReq} payload - The cart to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the created cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.create()
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    create(payload?: StorePostCartReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Create Payment Sessions for each of the available Payment Providers in the Cart's Region. If there's only one payment session created,
     * it will be selected by default. The creation of the payment session uses the payment provider and may require sending requests to third-party services.
     * @param {string} cart_id - The ID of the cart to create the payment sessions for.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.createPaymentSessions(cartId)
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    createPaymentSessions(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Remove a Discount from a Cart. This only removes the application of the discount, and not completely deletes it. The totals will be re-calculated and the payment sessions
     * will be refreshed after the removal.
     * @param {string} cart_id - the ID of the cart to remove the discount from.
     * @param {string} code - The code of the discount to remove from the cart.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.deleteDiscount(cartId, code)
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    deleteDiscount(cart_id: string, code: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Delete a Payment Session in a Cart. May be useful if a payment has failed. The totals will be recalculated.
     * @param {string} cart_id - The ID of the cart to delete the payment session from.
     * @param {string} provider_id - The ID of the payment provider that the session is associated with.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.deletePaymentSession(cartId, "manual")
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    deletePaymentSession(cart_id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Refresh a Payment Session to ensure that it is in sync with the Cart. This is usually not necessary, but is provided for edge cases.
     * @param {string} cart_id - The ID of the cart to refresh its payment session.
     * @param {string} provider_id - The ID of the payment provider that's associated with the payment session.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.refreshPaymentSession(cartId, "manual")
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    refreshPaymentSession(cart_id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Retrieve a Cart's details. This includes recalculating its totals.
     * @param {string} cart_id - The cart's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.retrieve(cartId)
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    retrieve(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Select the Payment Session that will be used to complete the cart. This is typically used when the customer chooses their preferred payment method during checkout.
     * The totals of the cart will be recalculated.
     * @param {string} cart_id - The cart's ID.
     * @param {StorePostCartsCartPaymentSessionReq} payload - The associated payment provider.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.setPaymentSession(cartId, {
     *   provider_id: "manual"
     * })
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    setPaymentSession(cart_id: string, payload: StorePostCartsCartPaymentSessionReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Update a Cart's details. If the cart has payment sessions and the region was not changed, the payment sessions are updated. The cart's totals are also recalculated.
     * @param {string} cart_id - The cart's ID.
     * @param {StorePostCartsCartReq} payload - The attributes to update in the cart.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.update(cartId, {
     *   email: "user@example.com"
     * })
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    update(cart_id: string, payload: StorePostCartsCartReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
    /**
     * Update a Payment Session with additional data. This can be useful depending on the payment provider used.
     * All payment sessions are updated and cart totals are recalculated afterwards.
     * @param {string} cart_id - The cart's ID.
     * @param {string} provider_id - The ID of the payment provider that the payment session is associated with.
     * @param {StorePostCartsCartPaymentSessionUpdateReq} payload - The attributes to update in the payment session.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCartsRes>} Resolves to the cart's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.carts.updatePaymentSession(cartId, "manual", {
     *   data: {
     *
     *   }
     * })
     * .then(({ cart }) => {
     *   console.log(cart.id);
     * })
     */
    updatePaymentSession(cart_id: string, provider_id: string, payload: StorePostCartsCartPaymentSessionUpdateReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCartsRes>;
}

/**
 * This class is used to send requests to [Store Product Collection API Routes](https://docs.medusajs.com/api/store#product-collections). All its method
 * are available in the JS Client under the `medusa.collections` property.
 *
 * A product collection is used to organize products for different purposes such as marketing or discount purposes. For example, you can create a Summer Collection.
 * Using the methods in this class, you can list or retrieve a collection's details and products.
 */
declare class CollectionsResource extends BaseResource {
    /**
     * Retrieve a product collection's details.
     * @param {string} id - The ID of the product collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCollectionsRes>} Resolves to the collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.collections.retrieve(collectionId)
     * .then(({ collection }) => {
     *   console.log(collection.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreCollectionsRes>;
    /**
     * Retrieve a list of product collections. The product collections can be filtered by fields such as `handle` or `created_at` passed in the `query` parameter.
     * The product collections can also be paginated.
     * @param {StoreGetCollectionsParams} query - Filters and pagination configurations to apply on the retrieved product collections.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCollectionsListRes>} Resolves to the list of product collections with pagination fields.
     *
     * @example
     * To list product collections:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.collections.list()
     * .then(({ collections, limit, offset, count }) => {
     *   console.log(collections.length);
     * })
     * ```
     *
     * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.collections.list({
     *   limit,
     *   offset
     * })
     * .then(({ collections, limit, offset, count }) => {
     *   console.log(collections.length);
     * })
     * ```
     */
    list(query?: StoreGetCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreCollectionsListRes>;
}

/**
 * This class is used to send requests to Payment Method API Routes part of the [Store Customer API Routes](https://docs.medusajs.com/api/store#customers_postcustomers). All its method
 * are available in the JS Client under the `medusa.customers.paymentMethods` property.
 *
 * All methods in this class require {@link AuthResource.authenticate | customer authentication}.
 */
declare class PaymentMethodsResource extends BaseResource {
    /**
     * Retrieve the logged-in customer's saved payment methods. This method only works with payment providers created with the deprecated Payment Service interface.
     * The payment methods are saved using the Payment Service's third-party service, and not on the Medusa backend. So, they're retrieved from the third-party service.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {StoreCustomersListPaymentMethodsRes} Resolves to the customer's payment methods.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.paymentMethods.list()
     * .then(({ payment_methods }) => {
     *   console.log(payment_methods.length);
     * })
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersListPaymentMethodsRes>;
}

/**
 * This class is used to send requests to [Store Customer API Routes](https://docs.medusajs.com/api/store#customers_postcustomers). All its method
 * are available in the JS Client under the `medusa.customers` property.
 *
 * A customer can register and manage their information such as addresses, orders, payment methods, and more.
 *
 * Related Guide: [How to implement customer profiles in your storefront](https://docs.medusajs.com/modules/customers/storefront/implement-customer-profiles).
 */
declare class CustomerResource extends BaseResource {
    /**
     * An instance of {@link PaymentMethodsResource} used to send requests to payment-related routes part of the [Store Customer API Routes](https://docs.medusajs.com/api/store#customers_postcustomers).
     */
    paymentMethods: PaymentMethodsResource;
    /**
     * An instance of {@link AddressesResource} used to send requests to address-related routes part of the [Store Customer API Routes](https://docs.medusajs.com/api/store#customers_postcustomers).
     */
    addresses: AddressesResource;
    /**
     * Register a new customer. This will also automatically authenticate the customer and set their login session in the response Cookie header.
     * Subsequent requests sent with the JS client are sent with the Cookie session automatically.
     * @param {StorePostCustomersReq} payload - The details of the customer to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns { ResponsePromise<StoreCustomersRes>} Resolves to the created customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.customers.create({
     *   first_name: "Alec",
     *   last_name: "Reynolds",
     *   email: "user@example.com",
     *   password: "supersecret"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    create(payload: StorePostCustomersReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Retrieve the logged-in customer's details. This method requires {@link AuthResource.authenticate | customer authentication}.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersRes>} Resolves to the logged-in customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.retrieve()
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    retrieve(customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Update the logged-in customer's details. This method requires {@link AuthResource.authenticate | customer authentication}.
     * @param {StorePostCustomersCustomerReq} payload - The attributes to update in the logged-in customer.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersRes>} Resolves to the logged-in customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.update({
     *   first_name: "Laury"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    update(payload: StorePostCustomersCustomerReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Retrieve a list of the logged-in customer's orders. The orders can be filtered by fields such as `status` or `fulfillment_status`. The orders can also be paginated.
     * This method requires {@link AuthResource.authenticate | customer authentication}.
     * @param {StoreGetCustomersCustomerOrdersParams} params - Filters and pagination configurations to apply on the retrieved orders.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersListOrdersRes>} Resolves to the list of orders with pagination fields.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged
     * medusa.customers.listOrders()
     * .then(({ orders, limit, offset, count }) => {
     *   console.log(orders);
     * })
     */
    listOrders(params?: StoreGetCustomersCustomerOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersListOrdersRes>;
    /**
     * Reset a customer's password using a password token created by a previous request using the {@link generatePasswordToken} method. If the password token expired,
     * you must create a new one.
     * @param {StorePostCustomersResetPasswordReq} payload - The necessary details to reset the password.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreCustomersRes>} Resolves to the customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.customers.resetPassword({
     *   email: "user@example.com",
     *   password: "supersecret",
     *   token: "supersecrettoken"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    resetPassword(payload: StorePostCustomersResetPasswordReq, customHeaders?: Record<string, any>): ResponsePromise<StoreCustomersRes>;
    /**
     * Create a reset password token to be used when sending a request with the {@link resetPassword} method. This emits the event `customer.password_reset`. If a notification provider is
     * installed in the Medusa backend and is configured to handle this event, a notification to the customer, such as an email, may be sent with reset instructions.
     * @param {StorePostCustomersCustomerPasswordTokenReq} payload - The necessary details to create the reset password token.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise} Resolves when reset password token is created successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.customers.generatePasswordToken({
     *   email: "user@example.com"
     * })
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // failed
     * })
     */
    generatePasswordToken(payload: StorePostCustomersCustomerPasswordTokenReq, customHeaders?: Record<string, any>): ResponsePromise;
}

/**
 * This class is used to send requests to [Store Gift Card API Routes](https://docs.medusajs.com/api/store#gift-cards). All its method
 * are available in the JS Client under the `medusa.giftCards` property.
 *
 * Customers can use gift cards during checkout to deduct the gift card's balance from the checkout total.
 * The methods in this class allow retrieving a gift card's details by its code. A gift card can be applied to a cart using {@link CartsResource}.
 *
 * Related Guide: [How to use gift cards in a storefront](https://docs.medusajs.com/modules/gift-cards/storefront/use-gift-cards).
 */
declare class GiftCardsResource extends BaseResource {
    /**
     * Retrieve a Gift Card's details by its associated unique code.
     * @param {string} code - The code of the gift card.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreGiftCardsRes>} Resolves to the details of the gift card.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.giftCards.retrieve(code)
     * .then(({ gift_card }) => {
     *   console.log(gift_card.id);
     * })
     */
    retrieve(code: string, customHeaders?: Record<string, any>): ResponsePromise<StoreGiftCardsRes>;
}

/**
 * This class is used to send requests to [Store Order Edits API Routes](https://docs.medusajs.com/api/store#order-edits). All its method
 * are available in the JS Client under the `medusa.orderEdits` property.
 *
 * Order edits are changes made to items in an order such as adding, updating their quantity, or deleting them. Order edits are created by the admin.
 * A customer can review order edit requests created by an admin and confirm or decline them.
 *
 * Related Guide: [How to handle order edits in a storefront](https://docs.medusajs.com/modules/orders/storefront/handle-order-edits).
 */
declare class OrderEditsResource extends BaseResource {
    /**
     * Retrieve an Order Edit's details.
     * @param {string} id - The ID of the order edit.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.orderEdits.retrieve(orderEditId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrderEditsRes>;
    /**
     * Decline an Order Edit. The changes are not reflected on the original order.
     * @param {string} id - The ID of the order edit.
     * @param {StorePostOrderEditsOrderEditDecline} payload - The decline details.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.orderEdits.decline(orderEditId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id);
     * })
     */
    decline(id: string, payload: StorePostOrderEditsOrderEditDecline, customHeaders?: Record<string, any>): ResponsePromise<StoreOrderEditsRes>;
    /**
     * Complete and confirm an Order Edit and reflect its changes on the original order. Any additional payment required must be authorized first using the {@link PaymentCollectionsResource} routes.
     * @param {string} id - The ID of the order edit.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.orderEdits.complete(orderEditId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    complete(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrderEditsRes>;
}

/**
 * This class is used to send requests to [Store Order API Routes](https://docs.medusajs.com/api/store#orders). All its method
 * are available in the JS Client under the `medusa.orders` property.
 *
 * Orders are purchases made by customers, typically through a storefront.
 * Orders are placed and created using {@link CartsResource}. The methods in this class allow retrieving and claiming orders.
 *
 * Related Guide: [How to retrieve order details in a storefront](https://docs.medusajs.com/modules/orders/storefront/retrieve-order-details).
 */
declare class OrdersResource extends BaseResource {
    /**
     * Retrieve an Order's details.
     * @param {string} id - The order's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreOrdersRes>} Resolves to the details of the order.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.orders.retrieve(orderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrdersRes>;
    /**
     * Retrieve an order's details by the ID of the cart that was used to create the order.
     * @param {string} cart_id - The cart's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreOrdersRes>} Resolves to the details of the order.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.orders.retrieveByCartId(cartId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    retrieveByCartId(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreOrdersRes>;
    /**
     * Look up an order using filters. If the filters don't narrow down the results to a single order, a `404` response is returned with no orders.
     * @param {StoreGetOrdersParams} payload - Filters used to retrieve the order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreOrdersRes>} Resolves to the details of the order.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.orders.lookupOrder({
     *   display_id: 1,
     *   email: "user@example.com"
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    lookupOrder(payload: StoreGetOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<StoreOrdersRes>;
    /**
     * Allow the logged-in customer to claim ownership of one or more orders. This generates a token that can be used later on to verify the claim using the {@link confirmRequest} method.
     * This also emits the event `order-update-token.created`. So, if you have a notification provider installed that handles this event and sends the customer a notification, such as an email,
     * the customer should receive instructions on how to finalize their claim ownership.
     * @param {StorePostCustomersCustomerOrderClaimReq} payload - The orders to claim.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise} Resolves when the request is created successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.orders.requestCustomerOrders({
     *   order_ids,
     * })
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // an error occurred
     * })
     */
    requestCustomerOrders(payload: StorePostCustomersCustomerOrderClaimReq, customHeaders?: Record<string, any>): ResponsePromise;
    /**
     * Verify the claim order token provided to the customer when they request ownership of an order.
     * @param {StorePostCustomersCustomerAcceptClaimReq} payload - The claim order to verify.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise} Resolves when the claim order is verified successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.orders.confirmRequest(
     *   token,
     * )
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // an error occurred
     * })
     */
    confirmRequest(payload: StorePostCustomersCustomerAcceptClaimReq, customHeaders?: Record<string, any>): ResponsePromise;
}

/**
 * This class is used to send requests to [Store Payment Collection API Routes](https://docs.medusajs.com/api/store#payment-collections). All its method
 * are available in the JS Client under the `medusa.paymentCollections` property.
 *
 * A payment collection is useful for managing additional payments, such as for Order Edits, or installment payments.
 */
declare class PaymentCollectionsResource extends BaseResource {
    /**
     * Retrieve a Payment Collection's details.
     * @param {string} id - The ID of the payment collection.
     * @param {StoreGetPaymentCollectionsParams} query - Configurations to apply on the retrieved payment collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StorePaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * A simple example that retrieves a payment collection by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.paymentCollections.retrieve(paymentCollectionId)
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id)
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.paymentCollections.retrieve(paymentCollectionId, {
     *   expand: "region"
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id)
     * })
     * ```
     */
    retrieve(id: string, query?: StoreGetPaymentCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    /**
     * Authorize a Payment Session of a Payment Collection.
     * @param {string} id  - The ID of the payment collection.
     * @param {string} session_id - The ID of the payment session.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StorePaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.paymentCollections.authorize(paymentId, sessionId)
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id);
     * })
     */
    authorizePaymentSession(id: string, session_id: string, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    /**
     * Authorize the Payment Sessions of a Payment Collection.
     * @param {string} id - The ID of the payment collection.
     * @param {StorePostPaymentCollectionsBatchSessionsAuthorizeReq} payload - The list of payment session IDs to authorize.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StorePaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.paymentCollections.authorizePaymentSessionsBatch(paymentCollectionId, {
     *  session_ids: ["ps_123456"]
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id);
     * })
     */
    authorizePaymentSessionsBatch(id: string, payload: StorePostPaymentCollectionsBatchSessionsAuthorizeReq, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    /**
     * Create, update, or delete a list of payment sessions of a Payment Collections. If a payment session is not provided in the `sessions` array, it's deleted.
     * @param {string} id - The ID of the payment collection.
     * @param {StorePostPaymentCollectionsBatchSessionsReq} payload - The attributes of each session to update.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StorePaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * To add two new payment sessions:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     *
     * // Total amount = 10000
     * medusa.paymentCollections.managePaymentSessionsBatch(paymentId, {
     *   sessions: [
     *     {
     *       provider_id: "stripe",
     *       amount: 5000,
     *     },
     *     {
     *       provider_id: "manual",
     *       amount: 5000,
     *     },
     *   ]
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id);
     * })
     * ```
     *
     * To update a payment session and another one by not including it in the payload:
     *
     * ```ts
     * medusa.paymentCollections.managePaymentSessionsBatch(paymentId, {
     *   sessions: [
     *     {
     *       provider_id: "stripe",
     *       amount: 10000,
     *       session_id: "ps_123456"
     *     },
     *   ]
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id);
     * })
     * ```
     */
    managePaymentSessionsBatch(id: string, payload: StorePostPaymentCollectionsBatchSessionsReq, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    /**
     * Create a Payment Session for a payment provider in a Payment Collection.
     * @param {string} id - The ID of the payment collection.
     * @param {StorePaymentCollectionSessionsReq} payload - The payment session to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StorePaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.paymentCollections.managePaymentSession(payment_id, { provider_id: "stripe" })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id);
     * })
     */
    managePaymentSession(id: string, payload: StorePaymentCollectionSessionsReq, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsRes>;
    /**
     * Refresh a Payment Session's data to ensure that it is in sync with the Payment Collection.
     * @param {string} id - The ID of the payment collection.
     * @param {string} session_id - The ID of the payment session.
     * @param customHeaders
     * @returns {ResponsePromise<StorePaymentCollectionsSessionRes>} Resolves to the refreshed payment session's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.paymentCollections.refreshPaymentSession(paymentCollectionId, sessionId)
     * .then(({ payment_session }) => {
     *   console.log(payment_session.status);
     * })
     */
    refreshPaymentSession(id: string, session_id: string, customHeaders?: Record<string, any>): ResponsePromise<StorePaymentCollectionsSessionRes>;
}

/**
 * This class is used to send requests to [Store Product Category API Routes](https://docs.medusajs.com/api/store#product-categories_getproductcategories). All its method
 * are available in the JS Client under the `medusa.productCategories` property.
 *
 * Products can be categoriezed into categories. A product can be associated more than one category.
 * Using the methods in this class, you can list or retrieve a category's details and products.
 *
 * Related Guide: [How to use product categories in a storefront](https://docs.medusajs.com/modules/products/storefront/use-categories).
 *
 * @featureFlag product_categories
 */
declare class ProductCategoriesResource extends BaseResource {
    /**
     * Retrieve a Product Category's details.
     * @param {string} id - The ID of the product category.
     * @param {StoreGetProductCategoriesCategoryParams} query - Configurations to apply on the retrieved product categories.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreGetProductCategoriesCategoryRes>} Resolves to the product category's details.
     *
     * @example
     * A simple example that retrieves a product category by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.productCategories.retrieve(productCategoryId)
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.productCategories.retrieve(productCategoryId, {
     *   expand: "products"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     * ```
     */
    retrieve(id: string, query?: StoreGetProductCategoriesCategoryParams, customHeaders?: Record<string, any>): ResponsePromise<StoreGetProductCategoriesCategoryRes>;
    /**
     * Retrieve a list of product categories. The product categories can be filtered by fields such as `handle` or `q` passed in the `query` parameter.
     * The product categories can also be paginated. This method can also be used to retrieve a product category by its handle.
     * @param {StoreGetProductCategoriesParams} query - Filters and pagination configurations to apply on the retrieved product categories.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreGetProductCategoriesRes>} Resolves to the list of product categories with pagination fields.
     *
     * @example
     * To list product categories:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.productCategories.list()
     * .then(({ product_categories, limit, offset, count }) => {
     *   console.log(product_categories.length);
     * })
     * ```
     *
     * To retrieve a product category by its handle:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.productCategories.list({
     *   handle: "women",
     * })
     * .then(({ product_categories, limit, offset, count }) => {
     *   if (!product_categories.length) {
     *     // category does not exist
     *   }
     *   const category = product_categories[0]
     * })
     * ```
     *
     * To specify relations that should be retrieved within the product categories:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.productCategories.list({
     *   expand: "products"
     * })
     * .then(({ product_categories, limit, offset, count }) => {
     *   console.log(product_categories.length);
     * })
     * ```
     *
     * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.productCategories.list({
     *   expand: "products",
     *   limit,
     *   offset
     * })
     * .then(({ product_categories, limit, offset, count }) => {
     *   console.log(product_categories.length);
     * })
     * ```
     */
    list(query?: StoreGetProductCategoriesParams, customHeaders?: Record<string, any>): ResponsePromise<StoreGetProductCategoriesRes>;
}

/**
 * This class is used to send requests to [Store Product Tag API Routes](https://docs.medusajs.com/api/store#product-tags). All its method
 * are available in the JS Client under the `medusa.productTags` property.
 *
 * Product tags are string values that can be used to filter products by.
 * Products can have more than one tag, and products can share tags.
 */
declare class ProductTagsResource extends BaseResource {
    /**
     * Retrieve a list of product tags. The product tags can be filtered by fields such as `id` or `q` passed in the `query` parameter. The product tags can also be sorted or paginated.
     * @param {StoreGetProductTagsParams} query - Filters and pagination configurations to apply on the retrieved product tags.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreProductTagsListRes>} Resolves to the list of product tags with pagination fields.
     *
     * @example
     * To list product tags:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.productTags.list()
     * .then(({ product_tags }) => {
     *   console.log(product_tags.length);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.productTags.list({
     *   limit,
     *   offset
     * })
     * .then(({ product_tags }) => {
     *   console.log(product_tags.length);
     * })
     * ```
     */
    list(query?: StoreGetProductTagsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreProductTagsListRes>;
}

/**
 * This class is used to send requests to [Store Product Type API Routes](https://docs.medusajs.com/api/store#product-types). All its method
 * are available in the JS Client under the `medusa.productTypes` property.
 *
 * Product types are string values that can be used to filter products by.
 * Products can have more than one tag, and products can share types.
 */
declare class ProductTypesResource extends BaseResource {
    /**
     * Retrieve a list of product types. The product types can be filtered by fields such as `value` or `q` passed in the `query` parameter. The product types can also be sorted or paginated.
     * @param {StoreGetProductTypesParams} query - Filters and pagination configurations to apply on retrieved product types.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreProductTypesListRes>} Resolves to the list of product types with pagination fields.
     *
     * @example
     * To list product types:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.productTypes.list()
     * .then(({ product_types }) => {
     *   console.log(product_types.length);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.productTypes.list({
     *   limit,
     *   offset
     * })
     * .then(({ product_types }) => {
     *   console.log(product_types.length);
     * })
     * ```
     */
    list(query?: StoreGetProductTypesParams, customHeaders?: Record<string, any>): ResponsePromise<StoreProductTypesListRes>;
}

/**
 * This class is used to send requests to [Store Product Variant API Routes](https://docs.medusajs.com/api/store#product-variants). All its method
 * are available in the JS Client under the `medusa.product.variants` property.
 *
 * Product variants are the actual salable item in your store. Each variant is a combination of the different option values available on the product.
 */
declare class ProductVariantsResource extends BaseResource {
    /**
     * Retrieve a Product Variant's details. For accurate and correct pricing of the product variant based on the customer's context, it's highly recommended to pass fields such as
     * `region_id`, `currency_code`, and `cart_id` when available.
     *
     * Passing `sales_channel_id` ensures retrieving only variants of products available in the current sales channel.
     * You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
     * @param {string} id - The ID of the product variant.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreVariantsRes>} Resolves to the product variant's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.product.variants.retrieve(productVariantId)
     * .then(({ variant }) => {
     *   console.log(variant.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreVariantsRes>;
    /**
     * Retrieves a list of product variants. The product variants can be filtered by fields such as `id` or `title` passed in the `query` parameter. The product variants can also be paginated.
     *
     * For accurate and correct pricing of the product variants based on the customer's context, it's highly recommended to pass fields such as
     * `region_id`, `currency_code`, and `cart_id` when available.
     *
     * Passing `sales_channel_id` ensures retrieving only variants of products available in the specified sales channel.
     * You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
     * @param {StoreGetVariantsParams} query - Filters and pagination configurations applied on the retrieved product variants.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreVariantsListRes>} Resolves to the list of product variants.
     *
     * @example
     * To list product variants:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.product.variants.list()
     * .then(({ variants }) => {
     *   console.log(variants.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the product variants:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.product.variants.list({
     *   expand: "product"
     * })
     * .then(({ variants }) => {
     *   console.log(variants.length);
     * })
     * ```
     *
     * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.product.variants.list({
     *   expand: "product",
     *   limit,
     *   offset
     * })
     * .then(({ variants }) => {
     *   console.log(variants.length);
     * })
     * ```
     */
    list(query?: StoreGetVariantsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreVariantsListRes>;
}

/**
 * This class is used to send requests to [Store Product API Routes](https://docs.medusajs.com/api/store#products). All its method
 * are available in the JS Client under the `medusa.products` property.
 *
 * Products are saleable items in a store. This also includes [saleable gift cards](https://docs.medusajs.com/modules/gift-cards/storefront/use-gift-cards) in a store.
 * Using the methods in this class, you can filter products by categories, collections, sales channels, and more.
 *
 * Related Guide: [How to show products in a storefront](https://docs.medusajs.com/modules/products/storefront/show-products).
 */
declare class ProductsResource extends BaseResource {
    /**
     * An instance of {@link ProductVariantsResource} used to send requests to [Store Product Variant API Routes](https://docs.medusajs.com/api/store#product-variants_getvariants).
     */
    variants: ProductVariantsResource;
    /**
     * Retrieve a Product's details. For accurate and correct pricing of the product based on the customer's context, it's highly recommended to pass fields such as
     * `region_id`, `currency_code`, and `cart_id` when available.
     *
     * Passing `sales_channel_id` ensures retrieving only products available in the current sales channel.
     * You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
     * @param {string} id - The product's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreProductsRes>} Resolves to the product's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.products.retrieve(productId)
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreProductsRes>;
    /**
     * Run a search query on products using the search service installed on the Medusa backend. The searching is handled through the search service, so the returned data's
     * format depends on the search service you're using.
     * @param {StorePostSearchReq} searchOptions - Fields to search products.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StorePostSearchRes>} Resolves to the list of search results. The format of the items depends on the search engine installed on the Medusa backend.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.products.search({
     *   q: "Shirt"
     * })
     * .then(({ hits }) => {
     *   console.log(hits.length);
     * })
     */
    search(searchOptions: StorePostSearchReq, customHeaders?: Record<string, any>): ResponsePromise<StorePostSearchRes>;
    /**
     * Retrieve a list of products. The products can be filtered by fields such as `id` or `q` passed in the `query` parameter. The products can also be sorted or paginated.
     * This method can also be used to retrieve a product by its handle.
     *
     * For accurate and correct pricing of the products based on the customer's context, it's highly recommended to pass fields such as
     * `region_id`, `currency_code`, and `cart_id` when available.
     *
     * Passing `sales_channel_id` ensures retrieving only products available in the specified sales channel.
     * You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
     * @param {StoreGetProductsParams} query - Filters and pagination configurations to apply on the retrieved products.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreProductsListRes>} Resolves to the list of products with pagination fields.
     *
     * @example
     * To list products:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.products.list()
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the products:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.products.list({
     *   expand: "variants"
     * })
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     *
     * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.products.list({
     *   expand: "variants",
     *   limit,
     *   offset
     * })
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     */
    list(query?: StoreGetProductsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreProductsListRes>;
}

/**
 * This class is used to send requests to [Store Region API Routes](https://docs.medusajs.com/api/store#regions_getregions). All its method
 * are available in the JS Client under the `medusa.regions` property.
 *
 * Regions are different countries or geographical regions that the commerce store serves customers in.
 * Customers can choose what region they're in, which can be used to change the prices shown based on the region and its currency.
 *
 * Related Guide: [How to use regions in a storefront](https://docs.medusajs.com/modules/regions-and-currencies/storefront/use-regions).
 */
declare class RegionsResource extends BaseResource {
    /**
     * Retrieve a list of regions. This method is useful to show the customer all available regions to choose from.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreRegionsListRes>} Resolves to the list of regions with pagination fields.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.regions.list()
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions.length);
     * })
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<StoreRegionsListRes>;
    /**
     * Retrieve a Region's details.
     * @param {string} id - The region's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.regions.retrieve(regionId)
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreRegionsRes>;
}

/**
 * This class is used to send requests to [Store Return Reason API Routes](https://docs.medusajs.com/api/store#return-reasons). All its method
 * are available in the JS Client under the `medusa.returnReasons` property.
 *
 * Return reasons are key-value pairs that are used to specify why an order return is being created.
 */
declare class ReturnReasonsResource extends BaseResource {
    /**
     * Retrieve a Return Reason's details.
     * @param {string} id - The ID of the return reason.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreReturnReasonsRes>} Resolves to the return reason's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.returnReasons.retrieve(reasonId)
     * .then(({ return_reason }) => {
     *   console.log(return_reason.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreReturnReasonsRes>;
    /**
     * Retrieve a list of Return Reasons. This is useful when implementing a Create Return flow in the storefront.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreReturnReasonsListRes>} Resolves to the list of return reasons.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.returnReasons.list()
     * .then(({ return_reasons }) => {
     *   console.log(return_reasons.length);
     * })
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<StoreReturnReasonsListRes>;
}

/**
 * This class is used to send requests to [Store Return API Routes](https://docs.medusajs.com/api/store#returns). All its method
 * are available in the JS Client under the `medusa.returns` property.
 *
 * A return can be created by a customer to return items in an order.
 *
 * Related Guide: [How to create a return in a storefront](https://docs.medusajs.com/modules/orders/storefront/create-return).
 */
declare class ReturnsResource extends BaseResource {
    /**
     * Create a return for an order. If a return shipping method is specified, the return is automatically fulfilled.
     * @param {StorePostReturnsReq} payload - The data of the return to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreReturnsRes>} Resolves to the return's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.returns.create({
     *   order_id,
     *   items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then((data) => {
     *   console.log(data.return.id);
     * })
     */
    create(payload: StorePostReturnsReq, customHeaders?: Record<string, any>): ResponsePromise<StoreReturnsRes>;
}

/**
 * This class is used to send requests to [Store Shipping Option API Routes](https://docs.medusajs.com/api/store#shipping-options). All its method
 * are available in the JS Client under the `medusa.shippingOptions` property.
 *
 * A shipping option is used to define the available shipping methods during checkout or when creating a return.
 *
 * Related Guide: [Shipping Option architecture](https://docs.medusajs.com/modules/carts-and-checkout/shipping#shipping-option).
 */
declare class ShippingOptionsResource extends BaseResource {
    /**
     * Retrieve a list of shipping options available for a cart.
     * @param {string} cart_id - The cart's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreShippingOptionsListRes>} Resolves to the list of shipping options.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.shippingOptions.listCartOptions(cartId)
     * .then(({ shipping_options }) => {
     *   console.log(shipping_options.length);
     * })
     */
    listCartOptions(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreShippingOptionsListRes>;
    /**
     * Retrieve a list of shipping options. The shipping options can be filtered using the `query` parameter.
     * @param {StoreGetShippingOptionsParams} query - The filters to apply on the shipping options.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreShippingOptionsListRes>} Resolves to the list of shipping options.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.shippingOptions.list()
     * .then(({ shipping_options }) => {
     *   console.log(shipping_options.length);
     * })
     */
    list(query?: StoreGetShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<StoreShippingOptionsListRes>;
}

/**
 * This class is used to send requests to [Store Swap API Routes](https://docs.medusajs.com/api/store#swaps). All its method
 * are available in the JS Client under the `medusa.swaps` property.
 *
 * A swap is created by a customer or an admin to exchange an item with a new one.
 * Creating a swap implicitely includes creating a return for the item being exchanged.
 *
 * Related Guide: [How to create a swap in a storefront](https://docs.medusajs.com/modules/orders/storefront/create-swap)
 */
declare class SwapsResource extends BaseResource {
    /**
     * Create a Swap for an Order. This will also create a return and associate it with the swap. If a return shipping option is specified, the return will automatically be fulfilled.
     * To complete the swap, you must use the {@link CartsResource.complete} method passing it the ID of the swap's cart.
     *
     * An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
     * the response. If an error occurs during swap creation or the request is interrupted for any reason, the swap creation can be retried by passing the idempotency
     * key in the `Idempotency-Key` header.
     * @param {StorePostSwapsReq} payload - The data of the swap to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreSwapsRes>} Resolves to the swap's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.swaps.create({
     *   order_id,
     *   return_items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ],
     *   additional_items: [
     *     {
     *       variant_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ swap }) => {
     *   console.log(swap.id);
     * })
     */
    create(payload: StorePostSwapsReq, customHeaders?: Record<string, any>): ResponsePromise<StoreSwapsRes>;
    /**
     * Retrieve a Swap's details by the ID of its cart.
     * @param {string} cart_id - The cart's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<StoreSwapsRes>} Resolves to the swap's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.swaps.retrieveByCartId(cartId)
     * .then(({ swap }) => {
     *   console.log(swap.id);
     * })
     */
    retrieveByCartId(cart_id: string, customHeaders?: Record<string, any>): ResponsePromise<StoreSwapsRes>;
}

/**
 * This class is used to send requests to [Admin Auth API Routes](https://docs.medusajs.com/api/admin#auth_getauth). All its method
 * are available in the JS Client under the `medusa.admin.auth` property.
 *
 * The methods in this class allow admin users to manage their session, such as login or log out.
 * You can send authenticated requests for an admin user either using the Cookie header, their API token, or the JWT Token.
 * When you log the admin user in using the {@link createSession} method, the JS client will automatically attach the
 * cookie header in all subsequent requests.
 *
 * Related Guide: [How to implement user profiles](https://docs.medusajs.com/modules/users/admin/manage-profile).
 */
declare class AdminAuthResource extends BaseResource {
    /**
     * Get the currently logged in user's details. Can also be used to check if there is an authenticated user.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminAuthRes>} Resolves to the logged-in user's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.auth.getSession()
     * .then(({ user }) => {
     *   console.log(user.id);
     * })
     */
    getSession(customHeaders?: Record<string, any>): ResponsePromise<AdminAuthRes>;
    /**
     * Log out the user and remove their authentication session. This will only work if you're using Cookie session for authentication. If the API token is still passed in the header,
     * the user is still authorized to perform admin functionalities in other API Routes.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<void>} Resolves when user is logged out successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in
     * medusa.admin.auth.deleteSession()
     */
    deleteSession(customHeaders?: Record<string, any>): ResponsePromise<void>;
    /**
     * Log a User in using their credentials. If the user is authenticated successfully, the cookie is automatically attached to subsequent requests sent with the JS Client.
     * @param {AdminPostAuthReq} payload - The credentials of the user.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminAuthRes>} Resolves to the user's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.admin.AdminAuthResource.createSession({
     *   email: "user@example.com",
     *   password: "supersecret"
     * })
     * .then(({ user }) => {
     *   console.log(user.id);
     * })
     */
    createSession(payload: AdminPostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<AdminAuthRes>;
    /**
     * Authenticate the user and retrieve a JWT token to use for subsequent authenticated requests.
     * @param {AdminPostAuthReq} payload - The credentials of the user.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminBearerAuthRes>} Resolves to the access token of the user, if they're authenticated successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * medusa.admin.auth.getToken({
     *   email: 'user@example.com',
     *   password: 'supersecret'
     * })
     * .then(({ access_token }) => {
     *   console.log(access_token);
     * })
     */
    getToken(payload: AdminPostAuthReq, customHeaders?: Record<string, any>): ResponsePromise<AdminBearerAuthRes>;
}

/**
 * This class is used to send requests to [Admin Batch Job API Routes](https://docs.medusajs.com/api/admin#batch-jobs). All its method
 * are available in the JS Client under the `medusa.admin.batchJobs` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A batch job is a task that is performed by the Medusa backend asynchronusly. For example, the Import Product feature is implemented using batch jobs.
 * The methods in this class allow admins to manage the batch jobs and their state.
 *
 * Related Guide: [How to import products](https://docs.medusajs.com/modules/products/admin/import-products).
 */
declare class AdminBatchJobsResource extends BaseResource {
    /**
     * Create a Batch Job to be executed asynchronously in the Medusa backend. If `dry_run` is set to `true`, the batch job will not be executed until the it is confirmed,
     * which can be done using the {@link confirm} method.
     * @param payload - The data of the batch job to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminBatchJobRes>} Resolves to the batch job's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.create({
     *   type: 'product-export',
     *   context: {},
     *   dry_run: false
     * }).then((({ batch_job }) => {
     *   console.log(batch_job.id);
     * })
     */
    create(payload: AdminPostBatchesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
    /**
     * Retrieve a list of Batch Jobs. The batch jobs can be filtered by fields such as `type` or `confirmed_at`. The batch jobs can also be sorted or paginated.
     * @param {AdminGetBatchParams} query - Filters and pagination configurations to apply on the retrieved batch jobs.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminBatchJobListRes>} The list of batch jobs with pagination fields.
     *
     * @example
     * To list batch jobs:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.list()
     * .then(({ batch_jobs, limit, offset, count }) => {
     *   console.log(batch_jobs.length)
     * })
     * ```
     *
     * To specify relations that should be retrieved within the batch jobs:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.list({
     *   expand: "created_by_user"
     * })
     * .then(({ batch_jobs, limit, offset, count }) => {
     *   console.log(batch_jobs.length)
     * })
     * ```
     *
     * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.list({
     *   expand: "created_by_user",
     *   limit,
     *   offset
     * })
     * .then(({ batch_jobs, limit, offset, count }) => {
     *   console.log(batch_jobs.length)
     * })
     * ```
     */
    list(query?: AdminGetBatchParams, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobListRes>;
    /**
     * Mark a batch job as canceled. When a batch job is canceled, the processing of the batch job doesn’t automatically stop.
     * @param {string} batchJobId - The ID of the batch job.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminBatchJobRes>} Resolves to the batch job's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.cancel(batchJobId)
     * .then(({ batch_job }) => {
     *   console.log(batch_job.id);
     * })
     */
    cancel(batchJobId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
    /**
     * When a batch job is created, it's not executed automatically if `dry_run` is set to `true`. This method confirms that the batch job should be executed.
     * @param {string} batchJobId - The ID of the batch job.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminBatchJobRes>} Resolves to the batch job's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.confirm(batchJobId)
     * .then(({ batch_job }) => {
     *   console.log(batch_job.id);
     * })
     */
    confirm(batchJobId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
    /**
     * Retrieve the details of a batch job.
     * @param {string} batchJobId - The ID of the batch job.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminBatchJobRes>} Resolves to the batch job's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.batchJobs.retrieve(batchJobId)
     * .then(({ batch_job }) => {
     *   console.log(batch_job.id);
     * })
     */
    retrieve(batchJobId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminBatchJobRes>;
}

/**
 * This class is used to send requests to [Admin Product Collection API Routes](https://docs.medusajs.com/api/admin#product-collections). All its method
 * are available in the JS Client under the `medusa.admin.collections` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A product collection is used to organize products for different purposes such as marketing or discount purposes. For example, you can create a Summer Collection.
 */
declare class AdminCollectionsResource extends BaseResource {
    /**
     * Create a product collection.
     * @param {AdminPostCollectionsReq} payload - The data of the product collection to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCollectionsRes>} Resolves to the created product collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.create({
     *   title: "New Collection"
     * })
     * .then(({ collection }) => {
     *   console.log(collection.id);
     * })
     */
    create(payload: AdminPostCollectionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * Update a product collection's details.
     * @param {string} id - The ID of the product collection.
     * @param {AdminPostCollectionsCollectionReq} payload - The data to update in the product collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCollectionsRes>} Resolves to the product collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.update(collectionId, {
     *   title: "New Collection"
     * })
     * .then(({ collection }) => {
     *   console.log(collection.id);
     * })
     */
    update(id: string, payload: AdminPostCollectionsCollectionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * Delete a product collection. This does not delete associated products.
     * @param {string} id - The ID of the product collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCollectionsDeleteRes>} Resolves to the deletion operation details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.delete(collectionId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsDeleteRes>;
    /**
     * Retrieve a product collection by its ID. The products associated with it are expanded and returned as well.
     * @param {string} id - The ID of the product collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCollectionsRes>} Resolves to the product collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.retrieve(collectionId)
     * .then(({ collection }) => {
     *   console.log(collection.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * Retrieve a list of product collections. The product collections can be filtered by fields such as `handle` or `title`. The collections can also be sorted or paginated.
     * @param {AdminGetCollectionsParams} query - Filters and pagination configurations to apply on the retrieved product collections.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCollectionsListRes>} Resolves to the list of product collections with pagination fields.
     *
     * @example
     * To list product collections:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.list()
     * .then(({ collections, limit, offset, count }) => {
     *   console.log(collections.length);
     * })
     * ```
     *
     * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.list({
     *   limit,
     *   offset
     * })
     * .then(({ collections, limit, offset, count }) => {
     *   console.log(collections.length);
     * })
     * ```
     */
    list(query?: AdminGetCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsListRes>;
    /**
     * Add products to collection.
     * @param {string} id - The ID of the product collection.
     * @param {AdminPostProductsToCollectionReq} payload - The products to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCollectionsRes>} Resolves to the product collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.addProducts(collectionId, {
     *   product_ids: [
     *     productId1,
     *     productId2
     *   ]
     * })
     * .then(({ collection }) => {
     *   console.log(collection.products)
     * })
     */
    addProducts(id: string, payload: AdminPostProductsToCollectionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCollectionsRes>;
    /**
     * Remove a list of products from a collection. This would not delete the product, only the association between the product and the collection.
     * @param {string} id - the ID of the product collection
     * @param {AdminDeleteProductsFromCollectionReq} payload - The products to remove from the collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDeleteProductsFromCollectionRes>} Resolves to the deletion operation details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.collections.removeProducts(collectionId, {
     *   product_ids: [
     *     productId1,
     *     productId2
     *   ]
     * })
     * .then(({ id, object, removed_products }) => {
     *   console.log(removed_products)
     * })
     */
    removeProducts(id: string, payload: AdminDeleteProductsFromCollectionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteProductsFromCollectionRes>;
}

/**
 * This class is used to send requests to [Admin Currency API Routes](https://docs.medusajs.com/api/admin#currencies). All its method
 * are available in the JS Client under the `medusa.admin.currencies` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A store can use unlimited currencies, and each region must be associated with at least one currency.
 * Currencies are defined within the Medusa backend. The methods in this class allow admins to list and update currencies.
 *
 * Related Guide: [How to manage currencies](https://docs.medusajs.com/modules/regions-and-currencies/admin/manage-currencies).
 */
declare class AdminCurrenciesResource extends BaseResource {
    /**
     * Retrieve a list of currencies. The currencies can be filtered by fields such as `code`. The currencies can also be sorted or paginated.
     * @param {AdminGetCurrenciesParams} query - Filters and pagination configurations to apply on retrieved currencies.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCurrenciesListRes>} Resolves to the list of currencies with pagination fields.
     *
     * @example
     * To list currencies:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.currencies.list()
     * .then(({ currencies, count, offset, limit }) => {
     *   console.log(currencies.length);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.currencies.list({
     *   limit,
     *   offset
     * })
     * .then(({ currencies, count, offset, limit }) => {
     *   console.log(currencies.length);
     * })
     * ```
     */
    list(query?: AdminGetCurrenciesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCurrenciesListRes>;
    /**
     * Update a Currency's details.
     * @param {string} code - The code of the currency to update.
     * @param {AdminPostCurrenciesCurrencyReq} payload - The attributes to update in the currency.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCurrenciesRes>} Resolves to the currency's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.currencies.update(code, {
     *   includes_tax: true
     * })
     * .then(({ currency }) => {
     *   console.log(currency.code);
     * })
     */
    update(code: string, payload: AdminPostCurrenciesCurrencyReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCurrenciesRes>;
}

/**
 * This class is used to send requests custom API Routes. All its method
 * are available in the JS Client under the `medusa.admin.custom` property.
 */
declare class AdminCustomResource extends BaseResource {
    /**
     * Send a `GET` request to a custom API Route. The method accepts a tuple of type parameters: the first `TQuery` is the type of accepted query parameters,
     * which defaults to `Record<string, any>`; the second `TResponse` is the type of response, which defaults to `any`.
     * @param {string} path - The path of the custom API Route.
     * @param {TQuery} query - Query path parameters to pass in the request.
     * @param {RequestOptions} options - Configurations to apply on the request.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<TResponse>} The response data.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * type PostsResponse = {
     * posts: Post[]
     * }
     * // must be previously logged in or use api token
     * medusa.admin.custom.get<Record<string, any>, PostsResponse>(
     *   "/blog/posts"
     * )
     * .then(({ posts }) => {
     *   console.log(posts.length);
     * })
     */
    get<TQuery extends Record<string, any>, TResponse = any>(path: string, query?: TQuery, options?: RequestOptions, customHeaders?: Record<string, any>): ResponsePromise<TResponse>;
    /**
     * Send a `POST` request to a custom API Route. The method accepts a tuple of type parameters: the first `TPayload` is the type of accepted body parameters,
     * which defaults to `Record<string, any>`; the second `TResponse` is the type of response, which defaults to `any`.
     * @param {string} path - The path of the custom API Route.
     * @param {TPayload} payload - Body parameters to pass in the request.
     * @param {RequestOptions} options - Configurations to apply on the request.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<TResponse>} The response data.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * type PostRequest = {
     *   title: string
     * }
     * type PostResponse = {
     *   post: Post
     * }
     * // must be previously logged in or use api token
     * medusa.admin.custom.post<PostRequest, PostResponse>(
     *   "/blog/posts",
     *   {
     *     title: "My post",
     *   }
     * )
     * .then(({ post }) => {
     *   console.log(post.id);
     * })
     */
    post<TPayload extends Record<string, any>, TResponse = any>(path: string, payload?: TPayload, options?: RequestOptions, customHeaders?: Record<string, any>): ResponsePromise<TResponse>;
    /**
     * Send a `DELETE` request to a custom API Route. The method accepts a type parameters `TResponse` indicating the type of response, which defaults to `any`.
     * @param {string} path - The path of the custom API Route.
     * @param {RequestOptions} options - Configurations to apply on the request.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<TResponse>} The response data.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.custom.delete(
     *   `/blog/posts/${postId}`
     * )
     * .then(() => {
     *   // deleted successfully
     * })
     */
    delete<TResponse = any>(path: string, options?: RequestOptions, customHeaders?: Record<string, any>): ResponsePromise<TResponse>;
}

/**
 * This class is used to send requests to [Admin Customer Group API Routes](https://docs.medusajs.com/api/admin#customer-groups). All its method
 * are available in the JS Client under the `medusa.admin.customerGroups` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Customer Groups can be used to organize customers that share similar data or attributes into dedicated groups.
 * This can be useful for different purposes such as setting a different price for a specific customer group.
 *
 * Related Guide: [How to manage customer groups](https://docs.medusajs.com/modules/customers/admin/manage-customer-groups).
 */
declare class AdminCustomerGroupsResource extends BaseResource {
    /**
     * Create a customer group.
     * @param {AdminPostCustomerGroupsReq} payload - The data of the customer group to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsRes>} Resolves to the customer group's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.create({
     *   name: "VIP"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group.id);
     * })
     */
    create(payload: AdminPostCustomerGroupsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Retrieve a customer group by its ID. You can expand the customer group's relations or select the fields that should be returned.
     * @param {string} id - The ID of the customer group.
     * @param {AdminGetCustomerGroupsGroupParams} query - Configurations to apply on the retrieved customer group.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsRes>} Resolves to the customer group's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.retrieve(customerGroupId)
     * .then(({ customer_group }) => {
     *   console.log(customer_group.id);
     * })
     */
    retrieve(id: string, query?: AdminGetCustomerGroupsGroupParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Update a customer group's details.
     * @param {string} id - The ID of the customer group.
     * @param {AdminPostCustomerGroupsGroupReq} payload - The attributes to update in the customer group.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsRes>} Resolves to the customer group's details.
     */
    update(id: string, payload: AdminPostCustomerGroupsGroupReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Delete a customer group. This doesn't delete the customers associated with the customer group.
     * @param {string} id - The ID of the customer group.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsDeleteRes>} Resolves to the deletion operation details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.delete(customerGroupId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsDeleteRes>;
    /**
     * Retrieve a list of customer groups. The customer groups can be filtered by fields such as `name` or `id`. The customer groups can also be sorted or paginated.
     * @param {AdminGetCustomerGroupsParams} query - Filters and pagination configurations to apply on the retrieved customer groups.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsListRes>} Resolves to the list of customer groups with pagination fields.
     *
     * @example
     * To list customer groups:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.list()
     * .then(({ customer_groups, limit, offset, count }) => {
     *   console.log(customer_groups.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the customer groups:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.list({
     *   expand: "customers"
     * })
     * .then(({ customer_groups, limit, offset, count }) => {
     *   console.log(customer_groups.length);
     * })
     * ```
     *
     * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.list({
     *   "expand": "customers",
     *   limit,
     *   offset
     * })
     * .then(({ customer_groups, limit, offset, count }) => {
     *   console.log(customer_groups.length);
     * })
     * ```
     */
    list(query?: AdminGetCustomerGroupsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsListRes>;
    /**
     * Add a list of customers to a customer group.
     * @param {string} id - The ID of the customer group.
     * @param {AdminPostCustomerGroupsGroupCustomersBatchReq} payload - The customers to add to the customer group.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsRes>} Resolves to the customer group's details.
     */
    addCustomers(id: string, payload: AdminPostCustomerGroupsGroupCustomersBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Remove a list of customers from a customer group. This doesn't delete the customer, only the association between the customer and the customer group.
     * @param {string} id - The ID of the customer group.
     * @param {AdminDeleteCustomerGroupsGroupCustomerBatchReq} payload - The customers to remove from the customer group.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomerGroupsRes>} Resolves to the customer group's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.removeCustomers(customerGroupId, {
     *   customer_ids: [
     *     {
     *       id: customerId
     *     }
     *   ]
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group.id);
     * })
     */
    removeCustomers(id: string, payload: AdminDeleteCustomerGroupsGroupCustomerBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomerGroupsRes>;
    /**
     * Retrieve a list of customers in a customer group. The customers can be filtered by the `q` field. The customers can also be paginated.
     * @param {string} id - The ID of the customer group.
     * @param {AdminGetCustomersParams} query - Filters and pagination configurations to apply on the retrieved customers.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomersListRes>} Resolves to the list of customers with pagination fields.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customerGroups.listCustomers(customerGroupId)
     * .then(({ customers }) => {
     *   console.log(customers.length);
     * })
     */
    listCustomers(id: string, query?: AdminGetCustomersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersListRes>;
}

/**
 * This class is used to send requests to [Admin Customer API Routes](https://docs.medusajs.com/api/admin#customers). All its method
 * are available in the JS Client under the `medusa.admin.customers` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Customers can either be created when they register through the {@link CustomersResource.create} method, or created by the admin using the {@link create} method.
 *
 * Related Guide: [How to manage customers](https://docs.medusajs.com/modules/customers/admin/manage-customers).
 */
declare class AdminCustomersResource extends BaseResource {
    /**
     * Create a customer as an admin.
     * @param {AdminPostCustomersReq} payload - The customer to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomersRes>} Resolves to the customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customers.create({
     *   email: "user@example.com",
     *   first_name: "Caterina",
     *   last_name: "Yost",
     *   password: "supersecret"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    create(payload: AdminPostCustomersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersRes>;
    /**
     * Update a customer's details.
     * @param {string} id - The customer's ID.
     * @param {AdminPostCustomersCustomerReq} payload - The attributes to update in the customer.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomersRes>} Resolves to the customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customers.update(customerId, {
     *   first_name: "Dolly"
     * })
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    update(id: string, payload: AdminPostCustomersCustomerReq, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersRes>;
    /**
     * Retrieve the details of a customer.
     * @param {string} id - The customer's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomersRes>} Resolves to the customer's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customers.retrieve(customerId)
     * .then(({ customer }) => {
     *   console.log(customer.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersRes>;
    /**
     * Retrieve a list of Customers. The customers can be filtered by fields such as `q` or `groups`. The customers can also be paginated.
     * @param {AdminGetCustomersParams} query - Filters and pagination configurations to apply on the retrieved customers.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminCustomersListRes>} Resolves to the list of customers with pagination fields.
     *
     * @example
     * To list customers:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customers.list()
     * .then(({ customers, limit, offset, count }) => {
     *   console.log(customers.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the customers:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customers.list({
     *   expand: "billing_address"
     * })
     * .then(({ customers, limit, offset, count }) => {
     *   console.log(customers.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.customers.list({
     *   expand: "billing_address",
     *   limit,
     *   offset
     * })
     * .then(({ customers, limit, offset, count }) => {
     *   console.log(customers.length);
     * })
     * ```
     */
    list(query?: AdminGetCustomersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminCustomersListRes>;
}

/**
 * This class is used to send requests to [Admin Discount API Routes](https://docs.medusajs.com/api/admin#discounts). All its method
 * are available in the JS Client under the `medusa.admin.discounts` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Admins can create discounts with conditions and rules, providing them with advanced settings for variety of cases.
 * The methods in this class can be used to manage discounts, their conditions, resources, and more.
 *
 * Related Guide: [How to manage discounts](https://docs.medusajs.com/modules/discounts/admin/manage-discounts).
 */
declare class AdminDiscountsResource extends BaseResource {
    /**
     * Add a Region to the list of Regions a Discount can be used in.
     * @param {string} id - The discount's ID.
     * @param {string} regionId - The ID of the region to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the discount's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.addRegion(discountId, regionId)
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    addRegion(id: string, regionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Create a discount with a given set of rules that defines how the discount is applied.
     * @param {AdminPostDiscountsReq} payload - The discount to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the discount's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * import { AllocationType, DiscountRuleType } from "@medusajs/medusa"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.create({
     *   code: "TEST",
     *   rule: {
     *     type: DiscountRuleType.FIXED,
     *     value: 10,
     *     allocation: AllocationType.ITEM
     *   },
     *   regions: ["reg_XXXXXXXX"],
     *   is_dynamic: false,
     *   is_disabled: false
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    create(payload: AdminPostDiscountsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Update a discount with a given set of rules that define how the discount is applied.
     * @param {string} id - The discount's ID.
     * @param {AdminPostDiscountsDiscountReq} payload - The attributes to update in the discount.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.update(discountId, {
     *   code: "TEST"
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    update(id: string, payload: AdminPostDiscountsDiscountReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Create a dynamic unique code that can map to a parent discount. This is useful if you want to automatically generate codes with the same rules and conditions.
     * @param {string} id - The discount's ID.
     * @param {AdminPostDiscountsDiscountDynamicCodesReq} payload - The dynamic code to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.createDynamicCode(discountId, {
     *   code: "TEST",
     *   usage_limit: 1
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    createDynamicCode(id: string, payload: AdminPostDiscountsDiscountDynamicCodesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Delete a discount. Deleting the discount will make it unavailable for customers to use.
     * @param {string} id - The discount's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsDeleteRes>} Resolves to the delete operation details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.delete(discountId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsDeleteRes>;
    /**
     * Delete a dynamic code from a discount.
     * @param {string} id - The discount's ID.
     * @param {string} code - The code of the dynamic code to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.deleteDynamicCode(discountId, code)
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    deleteDynamicCode(id: string, code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Retrieve a discount.
     * @param {string} id - The discount's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.retrieve(discountId)
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Retrieve a discount's details by its discount code.
     * @param {string} code - The code of the discount.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.retrieveByCode(code)
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    retrieveByCode(code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Retrieve a list of Discounts. The discounts can be filtered by fields such as `rule` or `is_dynamic`. The discounts can also be paginated.
     * @param {AdminGetDiscountsParams} query - Filters and pagination configurations to apply on the retrieved discounts.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsListRes>} Resolves to the list of discounts with pagination fields.
     *
     * @example
     * To list discounts:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.list()
     * .then(({ discounts, limit, offset, count }) => {
     *   console.log(discounts.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the discounts:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.list({
     *   expand: "rule"
     * })
     * .then(({ discounts, limit, offset, count }) => {
     *   console.log(discounts.id);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.list({
     *   expand: "rule",
     *   limit,
     *   offset
     * })
     * .then(({ discounts, limit, offset, count }) => {
     *   console.log(discounts.id);
     * })
     * ```
     */
    list(query?: AdminGetDiscountsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsListRes>;
    /**
     * Remove a Region from the list of Regions that a Discount can be used in. This does not delete a region, only the association between it and the discount.
     * @param {string} id - The discount's ID.
     * @param {string} regionId - The ID of the region to remove.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.removeRegion(discountId, regionId)
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    removeRegion(id: string, regionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Create a discount condition. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups` should be provided in the `payload` parameter,
     * based on the type of discount condition. For example, if the discount condition's type is `products`, the `products` field should be provided in the `payload` parameter.
     * @param {string} discountId - The discount's ID.
     * @param {AdminPostDiscountsDiscountConditions} payload - The discount condition to create.
     * @param {AdminPostDiscountsDiscountConditionsParams} query - Configurations to apply on the returned discount.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * To create a condition in a discount:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * import { DiscountConditionOperator } from "@medusajs/medusa"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.createCondition(discountId, {
     *   operator: DiscountConditionOperator.IN,
     *   products: [productId]
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved as part of the response:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * import { DiscountConditionOperator } from "@medusajs/medusa"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.createCondition(discountId, {
     *   operator: DiscountConditionOperator.IN,
     *   products: [productId]
     * }, {
     *   expand: "rule"
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     * ```
     */
    createCondition(discountId: string, payload: AdminPostDiscountsDiscountConditions, query?: AdminPostDiscountsDiscountConditionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Update a discount condition. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups` should be provided in the `payload` parameter,
     * based on the type of discount condition. For example, if the discount condition's type is `products`, the `products` field should be provided in the `payload` parameter.
     * @param {string} discountId - The discount's ID.
     * @param {string} conditionId - The ID of the discount condition.
     * @param {AdminPostDiscountsDiscountConditionsCondition} payload - The attributes to update in the discount condition.
     * @param {AdminPostDiscountsDiscountConditionsConditionParams} query - Configurations to apply on the returned discount.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * To update a condition in a discount:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.updateCondition(discountId, conditionId, {
     *   products: [
     *     productId
     *   ]
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved as part of the response:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.updateCondition(discountId, conditionId, {
     *   products: [
     *     productId
     *   ]
     * }, {
     *   expand: "rule"
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     * ```
     */
    updateCondition(discountId: string, conditionId: string, payload: AdminPostDiscountsDiscountConditionsCondition, query?: AdminPostDiscountsDiscountConditionsConditionParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Delete a discount condition. This doesn't delete resources associated to the discount condition.
     * @param {string} discountId - The discount's ID.
     * @param {string} conditionId - The ID of the discount condition.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsDeleteRes>} Resolves to the deletion operation details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.deleteCondition(discountId, conditionId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    deleteCondition(discountId: string, conditionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsDeleteRes>;
    /**
     * Retrieve a Discount Condition's details.
     * @param {string} discountId - The ID of the discount that the condition belongs to.
     * @param {string} conditionId - The ID of the discount condition.
     * @param {AdminGetDiscountsDiscountConditionsConditionParams} query - Configurations to apply on the retrieved discount condition.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountConditionsRes>} Resolves to the discount condition details.
     *
     * @example
     * A simple example that retrieves a discount condition by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.getCondition(discountId, conditionId)
     * .then(({ discount_condition }) => {
     *   console.log(discount_condition.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.getCondition(discountId, conditionId, {
     *   expand: "discount_rule"
     * })
     * .then(({ discount_condition }) => {
     *   console.log(discount_condition.id);
     * })
     * ```
     */
    getCondition(discountId: string, conditionId: string, query?: AdminGetDiscountsDiscountConditionsConditionParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountConditionsRes>;
    /**
     * Add a batch of resources to a discount condition. The type of resource depends on the type of discount condition. For example, if the discount condition's type is `products`,
     * the resources being added should be products.
     * @param {string} discountId - The ID of the discount the condition belongs to.
     * @param {string} conditionId - The ID of the discount condition.
     * @param {AdminPostDiscountsDiscountConditionsConditionBatchReq} payload - The resources to add to the discount condition.
     * @param {AdminPostDiscountsDiscountConditionsConditionBatchParams} query - Configurations to apply on the retrieved discount.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * To add resources to a discount condition:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.addConditionResourceBatch(discountId, conditionId, {
     *   resources: [{ id: itemId }]
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     * ```
     *
     * To specify relations to include in the returned discount:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.addConditionResourceBatch(discountId, conditionId, {
     *   resources: [{ id: itemId }]
     * }, {
     *   expand: "rule"
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     * ```
     */
    addConditionResourceBatch(discountId: string, conditionId: string, payload: AdminPostDiscountsDiscountConditionsConditionBatchReq, query?: AdminPostDiscountsDiscountConditionsConditionBatchParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
    /**
     * Remove a batch of resources from a discount condition. This will only remove the association between the resource and the discount condition, not the resource itself.
     * @param {string} discountId - The ID of the discount the condition belongs to.
     * @param {string} conditionId - The ID of the discount condition.
     * @param {AdminDeleteDiscountsDiscountConditionsConditionBatchReq} payload - The resources to remove.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDiscountsRes>} Resolves to the details of the discount.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.discounts.deleteConditionResourceBatch(discountId, conditionId, {
     *   resources: [{ id: itemId }]
     * })
     * .then(({ discount }) => {
     *   console.log(discount.id);
     * })
     */
    deleteConditionResourceBatch(discountId: string, conditionId: string, payload: AdminDeleteDiscountsDiscountConditionsConditionBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDiscountsRes>;
}

/**
 * This class is used to send requests to [Admin Draft Order API Routes](https://docs.medusajs.com/api/admin#draft-orders). All its method
 * are available in the JS Client under the `medusa.admin.draftOrders` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A draft order is an order created manually by the admin. It allows admins to create orders without direct involvement from the customer.
 *
 * Related Guide: [How to manage draft orders](https://docs.medusajs.com/modules/orders/admin/manage-draft-orders).
 */
declare class AdminDraftOrdersResource extends BaseResource {
    /**
     * Create a Draft Order. A draft order is not transformed into an order until payment is captured.
     * @param {AdminPostDraftOrdersReq} payload - The draft order to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersRes>} Resolves to the draft order's details
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.create({
     *   email: "user@example.com",
     *   region_id,
     *   items: [
     *     {
     *       quantity: 1
     *     }
     *   ],
     *   shipping_methods: [
     *     {
     *       option_id
     *     }
     *   ],
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order.id);
     * })
     */
    create(payload: AdminPostDraftOrdersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * Create a Line Item in the Draft Order.
     * @param {string} id - The ID of the draft order.
     * @param {AdminPostDraftOrdersDraftOrderLineItemsReq} payload - The line item to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersRes>} Resolves to the draft order's details
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.addLineItem(draftOrderId, {
     *   quantity: 1
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order.id);
     * })
     */
    addLineItem(id: string, payload: AdminPostDraftOrdersDraftOrderLineItemsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * Delete a Draft Order.
     * @param {string} id - The ID of the draft order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersDeleteRes>} Resolves to the deletion operation details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.delete(draftOrderId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersDeleteRes>;
    /**
     * Delete a Line Item from a Draft Order.
     * @param {string} id - The ID of the draft order that the line item belongs to.
     * @param {string} itemId - The ID of the line item to delete from the draft order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersRes>} Resolves to the draft order's details
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.removeLineItem(draftOrderId, itemId)
     * .then(({ draft_order }) => {
     *   console.log(draft_order.id);
     * })
     */
    removeLineItem(id: string, itemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * Retrieve a Draft Order's details.
     * @param {string} id - The ID of the draft order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersRes>} Resolves to the draft order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.retrieve(draftOrderId)
     * .then(({ draft_order }) => {
     *   console.log(draft_order.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * Retrieve an list of Draft Orders. The draft orders can be filtered by parameters such as `query`. The draft orders can also paginated.
     * @param {AdminGetDraftOrdersParams} query - Filters and pagination configurations to apply on the retrieved draft orders.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersListRes>} Resolves to the list of draft orders with pagination fields.
     *
     * @example
     * To list draft orders:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.list()
     * .then(({ draft_orders, limit, offset, count }) => {
     *   console.log(draft_orders.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.list({
     *   limit,
     *   offset
     * })
     * .then(({ draft_orders, limit, offset, count }) => {
     *   console.log(draft_orders.length);
     * })
     * ```
     */
    list(query?: AdminGetDraftOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersListRes>;
    /**
     * Capture the draft order's payment. This will also set the draft order's status to `completed` and create an order from the draft order. The payment is captured through Medusa's system payment,
     * which is manual payment that isn't integrated with any third-party payment provider. It is assumed that the payment capturing is handled manually by the admin.
     * @param {string} id - The ID of the draft order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>} Resolves to the created order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.markPaid(draftOrderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    markPaid(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>;
    /**
     * Update a Draft Order's details.
     * @param {string} id - The ID of the draft order.
     * @param {AdminPostDraftOrdersDraftOrderReq} payload - The attributes to update in the draft order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersRes>} Resolves to the draft order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.update(draftOrderId, {
     *   email: "user@example.com"
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order.id);
     * })
     */
    update(id: string, payload: AdminPostDraftOrdersDraftOrderReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
    /**
     * Update a Line Item in a Draft Order.
     * @param {string} id - The ID of the draft order that the line item belongs to.
     * @param {string} itemId - The ID of the line item to update.
     * @param {AdminPostDraftOrdersDraftOrderLineItemsItemReq} payload - The attributes to update in the line item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDraftOrdersRes>} Resolves to the draft order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.draftOrders.updateLineItem(draftOrderId, lineId, {
     *   quantity: 1
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order.id);
     * })
     */
    updateLineItem(id: string, itemId: string, payload: AdminPostDraftOrdersDraftOrderLineItemsItemReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDraftOrdersRes>;
}

/**
 * This class is used to send requests to [Admin Gift Card API Routes](https://docs.medusajs.com/api/admin#gift-cards). All its method
 * are available in the JS Client under the `medusa.admin.giftCards` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Admins can create gift cards and send them directly to customers, specifying options like their balance, region, and more.
 * These gift cards are different than the saleable gift cards in a store, which are created and managed through {@link AdminProductsResource}.
 *
 * Related Guide: [How to manage gift cards](https://docs.medusajs.com/modules/gift-cards/admin/manage-gift-cards#manage-custom-gift-cards).
 */
declare class AdminGiftCardsResource extends BaseResource {
    /**
     * Create a gift card that can redeemed by its unique code. The Gift Card is only valid within one region.
     * @param {AdminPostGiftCardsReq} payload - The gift card to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGiftCardsRes>} Resolves to the gift card's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.giftCards.create({
     *   region_id
     * })
     * .then(({ gift_card }) => {
     *   console.log(gift_card.id);
     * })
     */
    create(payload: AdminPostGiftCardsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsRes>;
    /**
     * Update a gift card's details.
     * @param {string} id - The ID of the gift card.
     * @param {AdminPostGiftCardsGiftCardReq} payload - The attributes to update in the gift card.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGiftCardsRes>} Resolves to the gift card's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.giftCards.update(giftCardId, {
     *   region_id
     * })
     * .then(({ gift_card }) => {
     *   console.log(gift_card.id);
     * })
     */
    update(id: string, payload: AdminPostGiftCardsGiftCardReq, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsRes>;
    /**
     * Delete a gift card. Once deleted, it can't be used by customers.
     * @param {string} id - The ID of the gift card.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGiftCardsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.giftCards.delete(giftCardId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsDeleteRes>;
    /**
     * Retrieve a gift card's details.
     * @param {string} id - The ID of the gift card.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGiftCardsRes>} Resolves to the gift card's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.giftCards.retrieve(giftCardId)
     * .then(({ gift_card }) => {
     *   console.log(gift_card.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsRes>;
    /**
     * Retrieve a list of gift cards. The gift cards can be filtered by fields such as `q` passed in the `query` parameter. The gift cards can also paginated.
     * @param {AdminGetGiftCardsParams} query - Filters and pagination configurations to apply on the retrieved gift cards.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGiftCardsListRes>} Resolves to the list of gift cards with pagination fields.
     *
     * @example
     * To list gift cards:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.giftCards.list()
     * .then(({ gift_cards, limit, offset, count }) => {
     *   console.log(gift_cards.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.giftCards.list({
     *   limit,
     *   offset
     * })
     * .then(({ gift_cards, limit, offset, count }) => {
     *   console.log(gift_cards.length);
     * })
     * ```
     */
    list(query?: AdminGetGiftCardsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminGiftCardsListRes>;
}

/**
 * This class is used to send requests to [Admin Inventory Item API Routes](https://docs.medusajs.com/api/admin#inventory-items). To use these API Routes, make sure to install the
 * [@medusajs/inventory](https://docs.medusajs.com/modules/multiwarehouse/install-modules#inventory-module) module in your Medusa backend. All its method
 * are available in the JS Client under the `medusa.admin.inventoryItems` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Inventory items, provided by the [Inventory Module](https://docs.medusajs.com/modules/multiwarehouse/inventory-module), can be used to manage the inventory of saleable items in your store.
 *
 * Related Guide: [How to manage inventory items](https://docs.medusajs.com/modules/multiwarehouse/admin/manage-inventory-items).
 */
declare class AdminInventoryItemsResource extends BaseResource {
    /**
     * Retrieve an Inventory Item's details.
     * @param {string} inventoryItemId - The ID of the inventory item.
     * @param {AdminGetInventoryItemsItemParams} query - Configurations applied on the retrieved inventory item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsRes>} The inventory item's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.retrieve(inventoryItemId)
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.id);
     * })
     */
    retrieve(inventoryItemId: string, query?: AdminGetInventoryItemsItemParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Update an Inventory Item's details.
     * @param {string} inventoryItemId - The ID of the inventory item.
     * @param {AdminPostInventoryItemsInventoryItemReq} payload - The attributes to update in the inventory item.
     * @param {AdminPostInventoryItemsInventoryItemParams} query - Configurations to apply on the retrieved inventory item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsRes>} The inventory item's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.update(inventoryItemId, {
     *   origin_country: "US",
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.id);
     * })
     */
    update(inventoryItemId: string, payload: AdminPostInventoryItemsInventoryItemReq, query?: AdminPostInventoryItemsInventoryItemParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Delete an Inventory Item. This does not delete the associated product variant.
     * @param {string} inventoryItemId - The ID of the inventory item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsDeleteRes>} The deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.delete(inventoryItemId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    delete(inventoryItemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsDeleteRes>;
    /**
     * Create an Inventory Item for a product variant.
     * @param {AdminPostInventoryItemsReq} payload - The inventory item to create.
     * @param {AdminPostInventoryItemsParams} query - Configurations to apply on the retrieved inventory item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsRes>} The inventory item's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.create({
     *   variant_id: "variant_123",
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.id);
     * })
     */
    create(payload: AdminPostInventoryItemsReq, query?: AdminPostInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Retrieve a list of inventory items. The inventory items can be filtered by fields such as `q` or `location_id` passed in the `query` parameter.
     * The inventory items can also be paginated.
     * @param {AdminGetInventoryItemsParams} query - Filters and pagination configurations applied on the retrieved inventory items.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>} The list of inventory items with pagination fields.
     *
     * @example
     * To list inventory items:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.list()
     * .then(({ inventory_items, count, offset, limit }) => {
     *   console.log(inventory_items.length);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.list({
     *   limit,
     *   offset
     * })
     * .then(({ inventory_items, count, offset, limit }) => {
     *   console.log(inventory_items.length);
     * })
     * ```
     */
    list(query?: AdminGetInventoryItemsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>;
    /**
     * Update a location level's details for a given inventory item.
     * @param {string} inventoryItemId - The ID of the inventory item that the location level belongs to.
     * @param {string} locationId - The ID of the location level to update.
     * @param {AdminPostInventoryItemsItemLocationLevelsLevelReq} payload - The attributes to update in the location level.
     * @param {AdminPostInventoryItemsItemLocationLevelsLevelParams} query - Configurations to apply on the returned inventory item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsRes>} the inventory item's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.updateLocationLevel(inventoryItemId, locationId, {
     *   stocked_quantity: 15,
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.id);
     * })
     */
    updateLocationLevel(inventoryItemId: string, locationId: string, payload: AdminPostInventoryItemsItemLocationLevelsLevelReq, query?: AdminPostInventoryItemsItemLocationLevelsLevelParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Create a Location Level for a given Inventory Item.
     * @param {string} inventoryItemId - The ID of the inventory item that the location level belongs to.
     * @param {AdminPostInventoryItemsItemLocationLevelsReq} payload - The location level to create.
     * @param {AdminPostInventoryItemsItemLocationLevelsParams} query - Configurations to apply on the returned inventory item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsRes>} the inventory item's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.createLocationLevel(inventoryItemId, {
     *   location_id: "sloc_123",
     *   stocked_quantity: 10,
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.id);
     * })
     */
    createLocationLevel(inventoryItemId: string, payload: AdminPostInventoryItemsItemLocationLevelsReq, query?: AdminPostInventoryItemsItemLocationLevelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Delete a location level of an Inventory Item.
     * @param {string} inventoryItemId - The ID of the inventory item.
     * @param {string} locationId - The ID of the location level to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsRes>} the inventory item's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.deleteLocationLevel(inventoryItemId, locationId)
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.id);
     * })
     */
    deleteLocationLevel(inventoryItemId: string, locationId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsRes>;
    /**
     * Retrieve a list of inventory levels of an inventory item. The inventory levels can be filtered by fields such as `location_id` passed in the `query` parameter.
     * @param {string} inventoryItemId - The ID of the inventory item that the location levels belong to.
     * @param {AdminGetInventoryItemsItemLocationLevelsParams} query - Filters to apply on the retrieved location levels.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInventoryItemsLocationLevelsRes>} The inventory item's details and list of location levels.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.inventoryItems.listLocationLevels(inventoryItemId)
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item.location_levels);
     * })
     */
    listLocationLevels(inventoryItemId: string, query?: AdminGetInventoryItemsItemLocationLevelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminInventoryItemsLocationLevelsRes>;
}

/**
 * This class is used to send requests to [Admin Invite API Routes](https://docs.medusajs.com/api/admin#invites). All its method
 * are available in the JS Client under the `medusa.admin.invites` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * An admin can invite new users to manage their team. This would allow new users to authenticate as admins and perform admin functionalities.
 *
 * Related Guide: [How to manage invites](https://docs.medusajs.com/modules/users/admin/manage-invites).
 */
declare class AdminInvitesResource extends BaseResource {
    /**
     * Accept an Invite. This will also delete the invite and create a new user that can log in and perform admin functionalities.
     * The user will have the email associated with the invite, and the password provided in the `payload` parameter.
     * @param {AdminPostInvitesInviteAcceptReq} payload - The user accepting the invite.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise} Resolves when the invite is accepted successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.invites.accept({
     *   token,
     *   user: {
     *     first_name: "Brigitte",
     *     last_name: "Collier",
     *     password: "supersecret"
     *   }
     * })
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // an error occurred
     * })
     */
    accept(payload: AdminPostInvitesInviteAcceptReq, customHeaders?: Record<string, any>): ResponsePromise;
    /**
     * Create an invite. This will generate a token associated with the invite and trigger an `invite.created` event. If you have a Notification Provider installed that handles this
     * event, a notification should be sent to the email associated with the invite to allow them to accept the invite.
     * @param {AdminPostInvitesPayload} payload - The invite to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise} Resolves when the invite is created successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.invites.create({
     *   user: "user@example.com",
     *   role: "admin"
     * })
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // an error occurred
     * })
     */
    create(payload: AdminPostInvitesPayload, customHeaders?: Record<string, any>): ResponsePromise;
    /**
     * Delete an invite. Only invites that weren't accepted can be deleted.
     * @param {string} id - The invite's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminInviteDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.invites.delete(inviteId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminInviteDeleteRes>;
    /**
     * Retrieve a list of invites.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminListInvitesRes>} Resolves to the list of invites.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.invites.list()
     * .then(({ invites }) => {
     *   console.log(invites.length);
     * })
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminListInvitesRes>;
    /**
     * Resend an invite. This renews the expiry date by seven days and generates a new token for the invite. It also triggers the `invite.created` event,
     * so if you have a Notification Provider installed that handles this event, a notification should be sent to the email associated with the
     * invite to allow them to accept the invite.
     * @param {string} id - The invite's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise} Resolves when the invite is resent successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.invites.resend(inviteId)
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // an error occurred
     * })
     */
    resend(id: string, customHeaders?: Record<string, any>): ResponsePromise;
}

/**
 * This class is used to send requests to [Admin Note API Routes](https://docs.medusajs.com/api/admin#notes). All its method
 * are available in the JS Client under the `medusa.admin.notes` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Notes are created by admins and can be associated with any resource. For example, an admin can add a note to an order for additional details or remarks.
 */
declare class AdminNotesResource extends BaseResource {
    /**
     * Create a Note which can be associated with any resource.
     * @param {AdminPostNotesReq} payload - The note to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotesRes>} Resolves to the note's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notes.create({
     *   resource_id,
     *   resource_type: "order",
     *   value: "We delivered this order"
     * })
     * .then(({ note }) => {
     *   console.log(note.id);
     * })
     */
    create(payload: AdminPostNotesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesRes>;
    /**
     * Update a Note's details.
     * @param {string} id - The note's ID.
     * @param {AdminPostNotesNoteReq} payload - The attributes to update in the note.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotesRes>} Resolves to the note's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notes.update(noteId, {
     *  value: "We delivered this order"
     * })
     * .then(({ note }) => {
     *   console.log(note.id);
     * })
     */
    update(id: string, payload: AdminPostNotesNoteReq, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesRes>;
    /**
     * Delete a Note.
     * @param {string} id - The note's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotesDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notes.delete(noteId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesDeleteRes>;
    /**
     * Retrieve a note's details.
     * @param {string} id - The note's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotesRes>} Resolves to the note's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notes.retrieve(noteId)
     * .then(({ note }) => {
     *   console.log(note.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesRes>;
    /**
     * Retrieve a list of notes. The notes can be filtered by fields such as `resource_id` passed in the `query` parameter. The notes can also be paginated.
     * @param {AdminGetNotesParams} query - Filters and pagination configurations applied on retrieved notes.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotesListRes>} Resolves to the list of notes with pagination fields.
     *
     * @example
     * To list notes:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notes.list()
     * .then(({ notes, limit, offset, count }) => {
     *   console.log(notes.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notes.list({
     *   limit,
     *   offset
     * })
     * .then(({ notes, limit, offset, count }) => {
     *   console.log(notes.length);
     * })
     * ```
     */
    list(query?: AdminGetNotesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminNotesListRes>;
}

/**
 * This class is used to send requests to [Admin Notification API Routes](https://docs.medusajs.com/api/admin#notifications). All its method
 * are available in the JS Client under the `medusa.admin.notifications` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Notifications are sent to customers to inform them of new updates. For example, a notification can be sent to the customer when their order is place or its state is updated.
 * The notification's type, such as an email or SMS, is determined by the notification provider installed on the Medusa backend.
 */
declare class AdminNotificationsResource extends BaseResource {
    /**
     * Retrieve a list of notifications. The notifications can be filtered by fields such as `event_name` or `resource_type` passed in the `query` parameter.
     * The notifications can also be paginated.
     * @param {AdminGetNotificationsParams} query - Filters and pagination configurations applied to the retrieved notifications.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotificationsListRes>} Resolves to the list of notifications with pagination fields.
     *
     * @example
     * To list notifications:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notifications.list()
     * .then(({ notifications }) => {
     *   console.log(notifications.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the notifications:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notifications.list({
     *   expand: "provider"
     * })
     * .then(({ notifications }) => {
     *   console.log(notifications.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notifications.list({
     *   expand: "provider",
     *   limit,
     *   offset
     * })
     * .then(({ notifications }) => {
     *   console.log(notifications.length);
     * })
     * ```
     */
    list(query?: AdminGetNotificationsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminNotificationsListRes>;
    /**
     * Resend a previously sent notifications, with the same data but optionally to a different address.
     * @param {string} id - The notification's ID.
     * @param {AdminPostNotificationsNotificationResendReq} payload - The details necessary to resend the notification.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminNotificationsRes>} Resolves to the notification's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.notifications.resend(notificationId)
     * .then(({ notification }) => {
     *   console.log(notification.id);
     * })
     */
    resend(id: string, payload: AdminPostNotificationsNotificationResendReq, customHeaders?: Record<string, any>): ResponsePromise<AdminNotificationsRes>;
}

/**
 * This class is used to send requests to [Admin Order Edit API Routes](https://docs.medusajs.com/api/admin#order-edits). All its method
 * are available in the JS Client under the `medusa.admin.orderEdits` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * An admin can edit an order to remove, add, or update an item's quantity. When an admin edits an order, they're stored as an `OrderEdit`.
 *
 * Related Guide: [How to edit an order](https://docs.medusajs.com/modules/orders/admin/edit-order).
 */
declare class AdminOrderEditsResource extends BaseResource {
    /**
     * Retrieve an order edit's details.
     * @param {string} id - The ID of the order edit.
     * @param {GetOrderEditsOrderEditParams} query - Configurations to apply on the retrieved order edit.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * A simple example that retrieves an order edit by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.retrieve(orderEditId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.retrieve(orderEditId, {
     *   expand: "order"
     * })
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     * ```
     */
    retrieve(id: string, query?: GetOrderEditsOrderEditParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Retrieve a list of order edits. The order edits can be filtered by fields such as `q` or `order_id` passed to the `query` parameter. The order edits can also be paginated.
     * @param {GetOrderEditsParams} query - Filters and pagination configurations applied to retrieved order edits.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsListRes>} Resolves to the list of order edits with pagination fields.
     *
     * @example
     * To list order edits:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.list()
     * .then(({ order_edits, count, limit, offset }) => {
     *   console.log(order_edits.length)
     * })
     * ```
     *
     * To specify relations that should be retrieved within the order edits:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.list({
     *   expand: "order"
     * })
     * .then(({ order_edits, count, limit, offset }) => {
     *   console.log(order_edits.length)
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.list({
     *   expand: "order",
     *   limit,
     *   offset
     * })
     * .then(({ order_edits, count, limit, offset }) => {
     *   console.log(order_edits.length)
     * })
     * ```
     */
    list(query?: GetOrderEditsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsListRes>;
    /**
     * Create an order edit.
     * @param {AdminPostOrderEditsReq} payload - The order edit to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.create({ orderId })
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    create(payload: AdminPostOrderEditsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Update an Order Edit's details.
     * @param {string} id - The ID of the order edit.
     * @param {AdminPostOrderEditsOrderEditReq} payload - The attributes to update in an order edit.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.update(orderEditId, {
     *   internal_note: "internal reason XY"
     * })
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    update(id: string, payload: AdminPostOrderEditsOrderEditReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Delete an order edit. Only order edits that have the status `created` can be deleted.
     * @param {string} id - The ID of the order edit.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.delete(orderEditId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditDeleteRes>;
    /**
     * Create a line item change in the order edit that indicates adding an item in the original order. The item will not be added to the original order until the order edit is
     * confirmed.
     * @param {string} id - The ID of the order edit to add the line item change to.
     * @param {AdminPostOrderEditsEditLineItemsReq} payload - The line item change to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.addLineItem(orderEditId, {
     *   variant_id,
     *   quantity
     * })
     * .then(({ order_edit }) => {
     *    console.log(order_edit.id)
     * })
     */
    addLineItem(id: string, payload: AdminPostOrderEditsEditLineItemsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Delete a line item change that indicates the addition, deletion, or update of a line item in the original order.
     * @param {string} orderEditId - The ID of the order edit.
     * @param {string} itemChangeId - The ID of the line item change.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditItemChangeDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.deleteItemChange(orderEdit_id, itemChangeId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    deleteItemChange(orderEditId: string, itemChangeId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditItemChangeDeleteRes>;
    /**
     * Request customer confirmation of an order edit. This would emit the event `order-edit.requested` which Notification Providers listen to and send
     * a notification to the customer about the order edit.
     * @param {string} id - The ID of the order edit.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.requestConfirmation(orderEditId)
     * .then({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    requestConfirmation(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Cancel an order edit.
     * @param {string} id - The ID of the order edit to cancel.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.cancel(orderEditId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    cancel(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Confirm an order edit. This will reflect the changes in the order edit on the associated order.
     * @param {string} id - The ID of the order edit to confirm.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.confirm(orderEditId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    confirm(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Create or update a line item change in the order edit that indicates addition, deletion, or update of a line item into an original order. Line item changes
     * are only reflected on the original order after the order edit is confirmed.
     * @param {string} orderEditId - The ID of the order edit that the line item belongs to.
     * @param {string} itemId - The ID of the line item to create or update its line item change.
     * @param {AdminPostOrderEditsEditLineItemsLineItemReq} payload - The creation or update of the line item change.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.updateLineItem(orderEditId, lineItemId, {
     *   quantity: 5
     * })
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    updateLineItem(orderEditId: string, itemId: string, payload: AdminPostOrderEditsEditLineItemsLineItemReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
    /**
     * Create a line item change in the order edit that indicates deleting an item in the original order. The item in the original order will not be deleted until the order edit is
     * confirmed.
     * @param {string} orderEditId - The ID of the order edit that the line item change belongs to.
     * @param {string} itemId - The ID of the line item.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrderEditsRes>} Resolves to the order edit's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orderEdits.removeLineItem(orderEditId, lineItemId)
     * .then(({ order_edit }) => {
     *   console.log(order_edit.id)
     * })
     */
    removeLineItem(orderEditId: string, itemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrderEditsRes>;
}

/**
 * This class is used to send requests to [Admin Order API Routes](https://docs.medusajs.com/api/admin#orders). All its method
 * are available in the JS Client under the `medusa.admin.orders` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Orders are purchases made by customers, typically through a storefront using {@link CartsResource}. Draft orders created by the admin are also transformed to an Order once the payment is captured.
 * Managing orders include managing fulfillment, payment, claims, reservations, and more.
 *
 * Related Guide: [How to manage orders](https://docs.medusajs.com/modules/orders/admin/manage-orders).
 */
declare class AdminOrdersResource extends BaseResource {
    /**
     * Update an order's details.
     * @param {string} id - The order's ID.
     * @param {AdminPostOrdersOrderReq} payload - The attributes to update in the order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.update(orderId, {
     *   email: "user@example.com"
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    update(id: string, payload: AdminPostOrdersOrderReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Retrieve an order's details.
     * @param {string} id - The order's ID.
     * @param {FindParams} query - Configurations to apply on the retrieved order.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * A simple example that retrieves an order by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.retrieve(orderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.retrieve(orderId, {
     *   expand: "customer"
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     * ```
     */
    retrieve(id: string, query?: FindParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Retrieve a list of orders. The orders can be filtered by fields such as `status` or `display_id` passed in the `query` parameter. The order can also be paginated.
     * @param {AdminGetOrdersParams} query - Filters and pagination configurations applied on the retrieved orders.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersListRes>} Resolves to the list of orders with pagination fields.
     *
     * @example
     * To list orders:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.list()
     * .then(({ orders, limit, offset, count }) => {
     *   console.log(orders.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the orders:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.list({
     *   expand: "customers"
     * })
     * .then(({ orders, limit, offset, count }) => {
     *   console.log(orders.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.list({
     *   expand: "customers",
     *   limit,
     *   offset
     * })
     * .then(({ orders, limit, offset, count }) => {
     *   console.log(orders.length);
     * })
     * ```
     */
    list(query?: AdminGetOrdersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersListRes>;
    /**
     * Complete an order and change its status. A canceled order can't be completed.
     * @param {string} id - The order's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.complete(orderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    complete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Capture all the payments associated with an order. The payment of canceled orders can't be captured.
     * @param {string} id - The ID of the order whose payments should be captured.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.capturePayment(orderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    capturePayment(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Refund an amount for an order. The amount must be less than or equal the `refundable_amount` of the order.
     * @param {string} id - The ID of the order whose customer should be refunded.
     * @param {AdminPostOrdersOrderRefundsReq} payload - The refund's details.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.refundPayment(orderId, {
     *   amount: 1000,
     *   reason: "Do not like it"
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    refundPayment(id: string, payload: AdminPostOrdersOrderRefundsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a Fulfillment of an Order using the fulfillment provider, and change the order's fulfillment status to either `partially_fulfilled` or `fulfilled`, depending on
     * whether all the items were fulfilled.
     * @param {string} id - The ID of the order that the fulfillment belongs to.
     * @param {AdminPostOrdersOrderFulfillmentsReq} payload - The fulfillment to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.createFulfillment(orderId, {
     *   items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    createFulfillment(id: string, payload: AdminPostOrdersOrderFulfillmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Cancel an order's fulfillment and change its fulfillment status to `canceled`.
     * @param {string} id - The ID of the order that the fulfillment belongs to.
     * @param {string} fulfillmentId - The fulfillment's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.cancelFulfillment(orderId, fulfillmentId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    cancelFulfillment(id: string, fulfillmentId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Cancel a swap's fulfillment and change its fulfillment status to `canceled`.
     * @param {string} id - The ID of the order that the swap is associated with.
     * @param {string} swapId - The ID of the swap the fulfillment belongs to.
     * @param {string} fulfillmentId - The fulfillment's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.cancelSwapFulfillment(orderId, swapId, fulfillmentId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    cancelSwapFulfillment(id: string, swapId: string, fulfillmentId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Cancel a claim's fulfillment and change its fulfillment status to `canceled`.
     * @param {string} id - The ID of the order that the claim is associated with.
     * @param {string} claimId - The claim's ID.
     * @param {string} fulfillmentId - The fulfillment's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.cancelClaimFulfillment(orderId, claimId, fulfillmentId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    cancelClaimFulfillment(id: string, claimId: string, fulfillmentId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a shipment and mark a fulfillment as shipped. This changes the order's fulfillment status to either `partially_shipped` or `shipped`, depending on
     * whether all the items were shipped.
     * @param {string} id - The ID of the order
     * @param {AdminPostOrdersOrderShipmentReq} payload - The shipment to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.createShipment(order_id, {
     *   fulfillment_id
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    createShipment(id: string, payload: AdminPostOrdersOrderShipmentReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Request and create a return for items in an order. If the return shipping method is specified, it will be automatically fulfilled.
     * @param {string} id - The order's ID.
     * @param {AdminPostOrdersOrderReturnsReq} payload - The return to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the return under the `returns` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.requestReturn(orderId, {
     *   items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    requestReturn(id: string, payload: AdminPostOrdersOrderReturnsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Cancel an order and change its status. This will also cancel any associated fulfillments and payments, and it may fail if the payment or fulfillment Provider
     * is unable to cancel the payment/fulfillment.
     * @param {string} id - The order's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.cancel(orderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    cancel(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Add a shipping method to an order. If another shipping method exists with the same shipping profile, the previous shipping method will be replaced.
     * @param {string} id - The order's ID.
     * @param {AdminPostOrdersOrderShippingMethodsReq} payload - The shipping method to be added.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.addShippingMethod(orderId, {
     *   price: 1000,
     *   option_id
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    addShippingMethod(id: string, payload: AdminPostOrdersOrderShippingMethodsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Archive an order and change its status.
     * @param {string} id - The order's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.archive(orderId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    archive(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a swap for an order. This includes creating a return that is associated with the swap.
     * @param {string} id - The order's ID.
     * @param {AdminPostOrdersOrderSwapsReq} payload - The swap to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `swaps` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.createSwap(orderId, {
     *   return_items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order }) => {
     *   console.log(order.swaps);
     * })
     */
    createSwap(id: string, payload: AdminPostOrdersOrderSwapsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Cancel a swap and change its status.
     * @param {string} id - The ID of the order that the swap belongs to.
     * @param {string} swapId - The swap's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `swaps` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.cancelSwap(orderId, swapId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    cancelSwap(id: string, swapId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a Fulfillment for a Swap and change its fulfillment status to `fulfilled`. If it requires any additional actions,
     * its fulfillment status may change to `requires_action`.
     * @param {string} id - The ID of the order that the swap belongs to.
     * @param {string} swapId - The swap's ID.
     * @param {AdminPostOrdersOrderSwapsSwapFulfillmentsReq} payload - The fulfillment to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `swaps` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.fulfillSwap(orderId, swapId, {
     *   no_notification: true,
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    fulfillSwap(id: string, swapId: string, payload: AdminPostOrdersOrderSwapsSwapFulfillmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a shipment for a swap and mark its fulfillment as shipped. This changes the swap's fulfillment status to either `shipped` or `partially_shipped`, depending on
     * whether all the items were shipped.
     * @param {string} id - The ID of the order that the swap belongs to.
     * @param {string} swapId - The swap's ID.
     * @param {AdminPostOrdersOrderSwapsSwapShipmentsReq} payload - The shipment to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `swaps` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.createSwapShipment(orderId, swapId, {
     *   fulfillment_id
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    createSwapShipment(id: string, swapId: string, payload: AdminPostOrdersOrderSwapsSwapShipmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Process a swap's payment either by refunding or issuing a payment. This depends on the `difference_due` of the swap. If `difference_due` is negative, the amount is refunded.
     * If `difference_due` is positive, the amount is captured.
     * @param {string} id - The ID of the order that the swap belongs to.
     * @param {string} swapId - The swap's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `swaps` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.processSwapPayment(orderId, swapId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    processSwapPayment(id: string, swapId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a claim for an order. If a return shipping method is specified, a return will also be created and associated with the claim. If the claim's type is `refund`,
     * the refund is processed as well.
     * @param {string} id - The order's ID.
     * @param {AdminPostOrdersOrderClaimsReq} payload - The claim to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the claim under the `claims` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.createClaim(orderId, {
     *   type: 'refund',
     *   claim_items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    createClaim(id: string, payload: AdminPostOrdersOrderClaimsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Cancel a claim and change its status. A claim can't be canceled if it has a refund, if its fulfillments haven't been canceled, of if its associated return hasn't been canceled.
     * @param {string} id - The ID of the order that the claim belongs to.
     * @param {string} claimId - The claim's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `claims` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.cancelClaim(orderId, claimId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    cancelClaim(id: string, claimId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Update a claim's details.
     * @param {string} id - The ID of the order that the claim belongs to.
     * @param {string} claimId - The claim's ID.
     * @param {AdminPostOrdersOrderClaimsClaimReq} payload - The attributes to update in the claim.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the claims under the `claims` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.updateClaim(orderId, claimId, {
     *   no_notification: true
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    updateClaim(id: string, claimId: string, payload: AdminPostOrdersOrderClaimsClaimReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a Fulfillment for a Claim, and change its fulfillment status to `partially_fulfilled` or `fulfilled` depending on whether all the items were fulfilled.
     * It may also change the status to `requires_action` if any actions are required.
     * @param {string} id - The ID of the order that the claim belongs to.
     * @param {string} claimId - The claim's ID.
     * @param {AdminPostOrdersOrderClaimsClaimFulfillmentsReq} payload - The fulfillment to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `claims` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.fulfillClaim(orderId, claimId, {
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    fulfillClaim(id: string, claimId: string, payload: AdminPostOrdersOrderClaimsClaimFulfillmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
    /**
     * Create a shipment for the claim and mark its fulfillment as shipped. If the shipment is created successfully, this changes the claim's fulfillment status
     * to either `partially_shipped` or `shipped`, depending on whether all the items were shipped.
     * @param {string} id - The ID of the order that the claim belongs to.
     * @param {string} claimId - The claim's ID.
     * @param {AdminPostOrdersOrderClaimsClaimShipmentsReq} payload - The shipment to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminOrdersRes>} Resolves to the order's details. You can access the swap under the `claims` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.orders.createClaimShipment(orderId, claimId, {
     *   fulfillment_id
     * })
     * .then(({ order }) => {
     *   console.log(order.id);
     * })
     */
    createClaimShipment(id: string, claimId: string, payload: AdminPostOrdersOrderClaimsClaimShipmentsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminOrdersRes>;
}

/**
 * This class is used to send requests to [Admin Payment Collection API Routes](https://docs.medusajs.com/api/admin#payment-collections). All its method
 * are available in the JS Client under the `medusa.admin.paymentCollections` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A payment collection is useful for managing additional payments, such as for Order Edits, or installment payments.
 */
declare class AdminPaymentCollectionsResource extends BaseResource {
    /**
     * Retrieve a Payment Collection's details.
     * @param {string} id - The ID of the payment collection.
     * @param {AdminGetPaymentCollectionsParams} query - Configurations to apply on the retrieved payment collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * A simple example that retrieves a payment collection by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.paymentCollections.retrieve(paymentCollectionId)
     * .then(({ payment_collection }) => {
     *     console.log(payment_collection.id)
     *   })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.paymentCollections.retrieve(paymentCollectionId, {
     *   expand: "currency"
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id)
     * })
     * ```
     */
    retrieve(id: string, query?: AdminGetPaymentCollectionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionsRes>;
    /**
     * Update a payment collection's details.
     * @param {string} id - The ID of the payment collection.
     * @param {AdminUpdatePaymentCollectionsReq} payload - The attributes to update in the payment collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.paymentCollections.update(paymentCollectionId, {
     *   description
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id)
     * })
     */
    update(id: string, payload: AdminUpdatePaymentCollectionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionsRes>;
    /**
     * Delete a payment collection. Only payment collections with the statuses `canceled` or `not_paid` can be deleted.
     * @param {string} id - The ID of the payment collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentCollectionDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.paymentCollections.delete(paymentCollectionId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionDeleteRes>;
    /**
     * Set the status of a payment collection as `authorized`. This will also change the `authorized_amount` of the payment collection.
     * @param {string} id - The ID of the payment collection.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentCollectionsRes>} Resolves to the payment collection's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.paymentCollections.markAsAuthorized(paymentCollectionId)
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection.id)
     * })
     */
    markAsAuthorized(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentCollectionsRes>;
}

/**
 * This class is used to send requests to [Admin Payment API Routes](https://docs.medusajs.com/api/admin#payments). All its method
 * are available in the JS Client under the `medusa.admin.payments` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A payment can be related to an order, swap, return, or more. It can be captured or refunded.
 */
declare class AdminPaymentsResource extends BaseResource {
    /**
     * Retrieve a payment's details.
     * @param {string} id - The payment's ID.
     * @param {GetPaymentsParams} query - Configurations to apply on the retrieved payment.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentRes>} Resolves to the payment's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.payments.retrieve(paymentId)
     * .then(({ payment }) => {
     *   console.log(payment.id);
     * })
     */
    retrieve(id: string, query?: GetPaymentsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentRes>;
    /**
     * Capture a payment.
     * @param {string} id - The payment's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentRes>} Resolves to the payment's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.payments.capturePayment(paymentId)
     * .then(({ payment }) => {
     *   console.log(payment.id);
     * })
     */
    capturePayment(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentRes>;
    /**
     * Refund a payment. The payment must be captured first.
     * @param {string} id - The payment's ID.
     * @param {AdminPostPaymentRefundsReq} payload - The refund to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRefundRes>} Resolves to the refund's details.
     *
     * @example
     * import { RefundReason } from "@medusajs/medusa";
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.payments.refundPayment(paymentId, {
     *   amount: 1000,
     *   reason: RefundReason.RETURN,
     *   note: "Do not like it",
     * })
     * .then(({ refund }) => {
     *   console.log(refund.amount);
     * })
     */
    refundPayment(id: string, payload: AdminPostPaymentRefundsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRefundRes>;
}

/**
 * This class is used to send requests to [Admin Price List API Routes](https://docs.medusajs.com/api/admin#price-lists). All its method
 * are available in the JS Client under the `medusa.admin.priceLists` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A price list are special prices applied to products based on a set of conditions, such as customer group.
 *
 * Related Guide: [How to manage price lists](https://docs.medusajs.com/modules/price-lists/admin/manage-price-lists).
 */
declare class AdminPriceListResource extends BaseResource {
    /**
     * Create a price list.
     * @param {AdminPostPriceListsPriceListReq} payload - The price list to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListRes>} Resolves to the price list details.
     *
     * @example
     * medusa.admin.priceLists.create({
     *   name: "New Price List",
     *   description: "A new price list",
     *   type: PriceListType.SALE,
     *   prices: [
     *     {
     *       amount: 1000,
     *       variant_id,
     *       currency_code: "eur"
     *     }
     *   ]
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list.id);
     * })
     */
    create(payload: AdminPostPriceListsPriceListReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    /**
     * Update a price list's details.
     * @param {string} id - The ID of the price list.
     * @param {AdminPostPriceListsPriceListPriceListReq} payload - The attributes to update in the price list.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListRes>} Resolves to the price list details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.update(priceListId, {
     *   name: "New Price List"
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list.id);
     * })
     */
    update(id: string, payload: AdminPostPriceListsPriceListPriceListReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    /**
     * Delete a price list and its associated prices.
     * @param {string} id - The ID of the price list.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.delete(priceListId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteRes>;
    /**
     * Retrieve a price list's details.
     * @param {string} id - The ID of the price list.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListRes>} Resolves to the price list details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.retrieve(priceListId)
     * .then(({ price_list }) => {
     *   console.log(price_list.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    /**
     * Retrieve a list of price lists. The price lists can be filtered by fields such as `q` or `status` passed in the `query` parameter. The price lists can also be sorted or paginated.
     * @param {AdminGetPriceListPaginationParams} query - Filters and pagination configurations to apply on the retrieved price lists.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListsListRes>} Resolves to the list of price lists with pagination fields.
     *
     * @example
     * To list price lists:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.list()
     * .then(({ price_lists, limit, offset, count }) => {
     *   console.log(price_lists.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the price lists:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.list({
     *   expand: "prices"
     * })
     * .then(({ price_lists, limit, offset, count }) => {
     *   console.log(price_lists.length);
     * })
     * ```
     *
     * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.list({
     *   expand: "prices",
     *   limit,
     *   offset
     * })
     * .then(({ price_lists, limit, offset, count }) => {
     *   console.log(price_lists.length);
     * })
     * ```
     */
    list(query?: AdminGetPriceListPaginationParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListsListRes>;
    /**
     * Retrieve a price list's products. The products can be filtered by fields such as `q` or `status` passed in the `query` parameter. The products can also be sorted or paginated.
     * @param {string} id - The ID of the price list.
     * @param {AdminGetPriceListsPriceListProductsParams} query - Filters and pagination configurations applied on the retrieved products.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListsProductsListRes>} Resolves to the list of products with pagination fields.
     *
     * @example
     * To list products in a price list:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.listProducts(priceListId)
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the products:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.listProducts(priceListId, {
     *   expand: "variants"
     * })
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.listProducts(priceListId, {
     *   expand: "variants",
     *   limit,
     *   offset
     * })
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     */
    listProducts(id: string, query?: AdminGetPriceListsPriceListProductsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListsProductsListRes>;
    /**
     * Add or update a list of prices in a price list.
     * @param {string} id - The ID of the price list.
     * @param {AdminPostPriceListPricesPricesReq} payload - The details of prices to add or update.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListRes>} Resolves to the price list's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.addPrices(priceListId, {
     *   prices: [
     *     {
     *       amount: 1000,
     *       variant_id,
     *       currency_code: "eur"
     *     }
     *   ]
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list.id);
     * })
     */
    addPrices(id: string, payload: AdminPostPriceListPricesPricesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListRes>;
    /**
     * Delete a list of prices in a price list
     * @param {string} id - The ID of the price list.
     * @param {AdminDeletePriceListPricesPricesReq} payload - The prices to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListDeleteBatchRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.deletePrices(priceListId, {
     *   price_ids: [
     *     price_id
     *   ]
     * })
     * .then(({ ids, object, deleted }) => {
     *   console.log(ids.length);
     * })
     */
    deletePrices(id: string, payload: AdminDeletePriceListPricesPricesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteBatchRes>;
    /**
     * Delete all the prices related to a specific product in a price list.
     * @param {string} priceListId - The ID of the price list.
     * @param {string} productId - The product's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListDeleteProductPricesRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.deleteProductPrices(priceListId, productId)
     * .then(({ ids, object, deleted }) => {
     *   console.log(ids.length);
     * })
     */
    deleteProductPrices(priceListId: string, productId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteProductPricesRes>;
    /**
     * Delete all the prices related to a specific product variant in a price list.
     * @param {string} priceListId - The ID of the price list.
     * @param {string} variantId - The ID of the product variant.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListDeleteVariantPricesRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.deleteVariantPrices(priceListId, variantId)
     * .then(({ ids, object, deleted }) => {
     *   console.log(ids);
     * })
     */
    deleteVariantPrices(priceListId: string, variantId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteVariantPricesRes>;
    /**
     * Delete all the prices associated with multiple products in a price list.
     * @param {string} priceListId - The ID of the price list.
     * @param {AdminDeletePriceListsPriceListProductsPricesBatchReq} payload - The products whose prices should be deleted.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPriceListDeleteProductPricesRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.priceLists.deleteProductsPrices(priceListId, {
     *   product_ids: [
     *     productId1,
     *     productId2,
     *   ]
     * })
     * .then(({ ids, object, deleted }) => {
     *   console.log(ids.length);
     * })
     */
    deleteProductsPrices(priceListId: string, payload: AdminDeletePriceListsPriceListProductsPricesBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPriceListDeleteProductPricesRes>;
}

/**
 * This class is used to send requests to [Admin Product Category API Routes](https://docs.medusajs.com/api/admin#product-categories). All its method
 * are available in the JS Client under the `medusa.admin.productCategories` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Products can be categoriezed into categories. A product can be added into more than one category.
 *
 * Related Guide: [How to manage product categories](https://docs.medusajs.com/modules/products/admin/manage-categories).
 *
 * @featureFlag product_categories
 */
declare class AdminProductCategoriesResource extends BaseResource {
    /**
     * Retrieve a product category's details.
     * @param {string} productCategoryId - The ID of the product category.
     * @param {AdminGetProductCategoryParams} query - Configurations to apply on the retrieved product category.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesCategoryRes>} Resolves to the product category's details.
     *
     * @example
     * A simple example that retrieves an order by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.retrieve(productCategoryId)
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.retrieve(productCategoryId, {
     *   expand: "category_children"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     * ```
     */
    retrieve(productCategoryId: string, query?: AdminGetProductCategoryParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /**
     * Create a product category.
     * @param {AdminPostProductCategoriesReq} payload - The product category's details.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesCategoryRes>} Resolves to the product category's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.create({
     *   name: "Skinny Jeans",
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     */
    create(payload: AdminPostProductCategoriesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /**
     * Updates a product category.
     * @param {string} productCategoryId - The ID of the product category.
     * @param {AdminPostProductCategoriesCategoryReq} payload - The attributes to update in the product category.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesCategoryRes>} Resolves to the product category's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.update(productCategoryId, {
     *   name: "Skinny Jeans"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     */
    update(productCategoryId: string, payload: AdminPostProductCategoriesCategoryReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /**
     * Retrieve a list of product categories. The product categories can be filtered by fields such as `q` or `handle` passed in the `query` parameter.
     * The product categories can also be paginated.
     * @param {AdminGetProductCategoriesParams} query - Filters and pagination configurations to apply on the retrieved product categories.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesListRes>} Resolves to the list of product categories with pagination fields.
     *
     * @example
     * To list product categories:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.list()
     * .then(({ product_categories, limit, offset, count }) => {
     *   console.log(product_categories.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the product category:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.list({
     *   expand: "category_children"
     * })
     * .then(({ product_categories, limit, offset, count }) => {
     *   console.log(product_categories.length);
     * })
     * ```
     *
     * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.list({
     *   expand: "category_children",
     *   limit,
     *   offset
     * })
     * .then(({ product_categories, limit, offset, count }) => {
     *   console.log(product_categories.length);
     * })
     * ```
     */
    list(query?: AdminGetProductCategoriesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesListRes>;
    /**
     * Delete a product category. This does not delete associated products.
     * @param {string} productCategoryId - The ID of the product category.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesCategoryDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.delete(productCategoryId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(productCategoryId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryDeleteRes>;
    /**
     * Remove a list of products from a product category.
     * @param {string} productCategoryId - The ID of the product category.
     * @param {AdminDeleteProductCategoriesCategoryProductsBatchReq} payload - The products to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesCategoryRes>} Resolves to the product category's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.removeProducts(productCategoryId, {
     *   product_ids: [
     *     {
     *       id: productId
     *     }
     *   ]
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     */
    removeProducts(productCategoryId: string, payload: AdminDeleteProductCategoriesCategoryProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
    /**
     * Add a list of products to a product category.
     * @param {string} productCategoryId - The ID of the product category.
     * @param {AdminPostProductCategoriesCategoryProductsBatchReq} payload - The products to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductCategoriesCategoryRes>} Resolves to the product category's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productCategories.addProducts(productCategoryId, {
     *   product_ids: [
     *     {
     *       id: productId
     *     }
     *   ]
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category.id);
     * })
     */
    addProducts(productCategoryId: string, payload: AdminPostProductCategoriesCategoryProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductCategoriesCategoryRes>;
}

/**
 * This class is used to send requests to [Admin Product Tag API Routes](https://docs.medusajs.com/api/admin#product-tags). All its method
 * are available in the JS Client under the `medusa.admin.productTags` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Product tags are string values created when you create or update a product with a new tag.
 * Products can have more than one tag, and products can share tags. This allows admins to associate products to similar tags that can be used to filter products.
 */
declare class AdminProductTagsResource extends BaseResource {
    /**
     * Retrieve a list of product tags. The product tags can be filtered by fields such as `q` or `value` passed in the `query` parameter. The product tags can also be sorted or paginated.
     * @param {AdminGetProductTagsParams} query - Filters and pagination configurations to apply on the retrieved product tags.
     * @returns {ResponsePromise<AdminProductTagsListRes>} Resolves to the list of product tags with pagination fields.
     *
     * @example
     * To list product tags:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productTags.list()
     * .then(({ product_tags }) => {
     *   console.log(product_tags.length);
     * })
     * ```
     *
     * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productTags.list({
     *   limit,
     *   offset
     * })
     * .then(({ product_tags }) => {
     *   console.log(product_tags.length);
     * })
     * ```
     */
    list(query?: AdminGetProductTagsParams): ResponsePromise<AdminProductTagsListRes>;
}

/**
 * This class is used to send requests to [Admin Product Type API Routes](https://docs.medusajs.com/api/admin#product-types). All its method
 * are available in the JS Client under the `medusa.admin.productTypes` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Product types are string values created when you create or update a product with a new type.
 * Products can have one type, and products can share types. This allows admins to associate products with a type that can be used to filter products.
 */
declare class AdminProductTypesResource extends BaseResource {
    /**
     * Retrieve a list of product types. The product types can be filtered by fields such as `q` or `value` passed in the `query` parameter.
     * The product types can also be sorted or paginated.
     * @param {AdminGetProductTypesParams} query - Filters and pagination configurations to apply on the retrieved product types.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductTypesListRes>} Resolves to the list of product types with pagination fields.
     *
     * @example
     * To list product types:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productTypes.list()
     * .then(({ product_types }) => {
     *   console.log(product_types.length);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.productTypes.list({
     *   limit,
     *   offset
     * })
     * .then(({ product_types }) => {
     *   console.log(product_types.length);
     * })
     * ```
     */
    list(query?: AdminGetProductTypesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductTypesListRes>;
}

/**
 * This class is used to send requests to [Admin Product API Routes](https://docs.medusajs.com/api/admin#products). All its method
 * are available in the JS Client under the `medusa.admin.products` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Products are saleable items in a store. This also includes [saleable gift cards](https://docs.medusajs.com/modules/gift-cards/admin/manage-gift-cards#manage-gift-card-product) in a store.
 *
 * Related Guide: [How to manage products](https://docs.medusajs.com/modules/products/admin/manage-products).
 */
declare class AdminProductsResource extends BaseResource {
    /**
     * Create a new Product. This API Route can also be used to create a gift card if the `is_giftcard` field is set to `true`.
     * @param {AdminPostProductsReq} payload - The product to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.create({
     *   title: "Shirt",
     *   is_giftcard: false,
     *   discountable: true
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    create(payload: AdminPostProductsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Retrieve a product's details.
     * @param {string} id - The product's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.retrieve(productId)
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Update a Product's details.
     * @param {string} id - The product's ID.
     * @param {AdminPostProductsProductReq} payload - The attributes to update in a product.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.update(productId, {
     *   title: "Shirt",
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    update(id: string, payload: AdminPostProductsProductReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Delete a product and its associated product variants and options.
     * @param {string} id - The product's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.delete(productId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsDeleteRes>;
    /**
     * Retrieve a list of products. The products can be filtered by fields such as `q` or `status` passed in the `query` parameter. The products can also be sorted or paginated.
     * @param {AdminGetProductsParams} query - Filters and pagination configurations to apply on the retrieved products.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsListRes>} Resolves to the list of products with pagination fields.
     *
     * @example
     * To list products:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.list()
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the products:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.list({
     *   expand: "images"
     * })
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.list({
     *   expand: "images",
     *   limit,
     *   offset
     * })
     * .then(({ products, limit, offset, count }) => {
     *   console.log(products.length);
     * })
     * ```
     */
    list(query?: AdminGetProductsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsListRes>;
    /**
     * @ignore
     *
     * @deprecated Use {@link AdminProductTypesResource.list} instead.
     */
    listTypes(customHeaders?: Record<string, any>): ResponsePromise<AdminProductsListTypesRes>;
    /**
     * Retrieve a list of Product Tags with how many times each is used in products.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsListTagsRes>} Resolves to the list of tags.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.listTags()
     * .then(({ tags }) => {
     *   console.log(tags.length);
     * })
     */
    listTags(customHeaders?: Record<string, any>): ResponsePromise<AdminProductsListTagsRes>;
    /**
     * Set the metadata of a product. It can be any key-value pair, which allows adding custom data to a product. Learn about how you can update and delete the metadata attribute
     * [here](https://docs.medusajs.com/development/entities/overview#metadata-attribute).
     * @param {string} id - The product's ID.
     * @param {AdminPostProductsProductMetadataReq} payload - The metadata details to add, update, or delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.setMetadata(productId, {
     *   key: "test",
     *   value: "true"
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    setMetadata(id: string, payload: AdminPostProductsProductMetadataReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Create a product variant associated with a product. Each product variant must have a unique combination of product option values.
     * @param {string} id - The ID of the product that the variant belongs to.
     * @param {AdminPostProductsProductVariantsReq} payload - The product variant to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details. You can access the variant under the `variants` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.createVariant(productId, {
     *   title: "Color",
     *   prices: [
     *     {
     *       amount: 1000,
     *       currency_code: "eur"
     *     }
     *   ],
     *   options: [
     *     {
     *       option_id,
     *       value: "S"
     *     }
     *   ],
     *   inventory_quantity: 100
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    createVariant(id: string, payload: AdminPostProductsProductVariantsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Update a product variant's details.
     * @param {string} id - The ID of the product that the variant belongs to.
     * @param {string} variantId - The ID of the product variant.
     * @param {AdminPostProductsProductVariantsVariantReq} payload - The attributes to update in the product variant.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details. You can access the variant under the `variants` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.updateVariant(productId, variantId, {
     *   title: "Color",
     *   prices: [
     *     {
     *       amount: 1000,
     *       currency_code: "eur"
     *     }
     *   ],
     *   options: [
     *     {
     *       option_id,
     *       value: "S"
     *     }
     *   ],
     *   inventory_quantity: 100
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    updateVariant(id: string, variantId: string, payload: AdminPostProductsProductVariantsVariantReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Delete a product variant.
     * @param {string} id - The ID of the product that the variant belongs to.
     * @param {string} variantId - The ID of the product variant.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsDeleteVariantRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.deleteVariant(productId, variantId)
     * .then(({ variant_id, object, deleted, product }) => {
     *   console.log(product.id);
     * })
     */
    deleteVariant(id: string, variantId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsDeleteVariantRes>;
    /**
     * Add a product option to a product.
     * @param {string} id - The product's ID.
     * @param {AdminPostProductsProductOptionsReq} payload - The option to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details. You can access the variant under the `options` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.addOption(productId, {
     *   title: "Size"
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    addOption(id: string, payload: AdminPostProductsProductOptionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Update a product option's details.
     * @param {string} id - The ID of the product that the option belongs to.
     * @param {string} optionId - The ID of the product option.
     * @param {AdminPostProductsProductOptionsOption} payload - The attributes to update in the product option.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsRes>} Resolves to the product's details. You can access the variant under the `options` property.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.products.updateOption(productId, optionId, {
     *   title: "Size"
     * })
     * .then(({ product }) => {
     *   console.log(product.id);
     * })
     */
    updateOption(id: string, optionId: string, payload: AdminPostProductsProductOptionsOption, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsRes>;
    /**
     * Delete a product option. If there are product variants that use this product option, they must be deleted before deleting the product option.
     * @param {string} id - The ID of the product that the option belongs to.
     * @param {string} optionId - The ID of the product option.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminProductsDeleteOptionRes>} Resolves to the deletion operation's details.
     */
    deleteOption(id: string, optionId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminProductsDeleteOptionRes>;
}

/**
 * This class is used to send requests to [Admin Publishable API Key API Routes](https://docs.medusajs.com/api/admin#publishable-api-keys). All its method
 * are available in the JS Client under the `medusa.admin.publishableApiKeys` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Publishable API Keys can be used to scope Store API calls with an API key, determining what resources are retrieved when querying the API.
 * For example, a publishable API key can be associated with one or more sales channels. When it is passed in the header of a request to the List Product store API Route,
 * the sales channels are inferred from the key and only products associated with those sales channels are retrieved.
 * Admins can manage publishable API keys and their associated resources. Currently, only Sales Channels are supported as a resource.
 *
 * Related Guide: [How to manage publishable API keys](https://docs.medusajs.com/development/publishable-api-keys/admin/manage-publishable-api-keys).
 */
declare class AdminPublishableApiKeyResource extends BaseResource {
    /**
     * Retrieve a publishable API key's details.
     * @param {string} id - The ID of the publishable API key.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysRes>} Resolves to the publishable API key's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.retrieve(publishableApiKeyId)
     * .then(({ publishable_api_key }) => {
     *   console.log(publishable_api_key.id)
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    /**
     * Retrieve a list of publishable API keys. The publishable API keys can be filtered by fields such as `q` passed in `query`. The publishable API keys can also be paginated.
     * @param {GetPublishableApiKeysParams} query - Filters and pagination configurations to apply on the retrieved publishable API keys.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysListRes>} Resolves to the list of publishable API keys with pagination fields.
     *
     * @example
     * To list publishable API keys:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.list()
     * .then(({ publishable_api_keys, count, limit, offset }) => {
     *   console.log(publishable_api_keys)
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.list({
     *   limit,
     *   offset
     * })
     * .then(({ publishable_api_keys, count, limit, offset }) => {
     *   console.log(publishable_api_keys)
     * })
     * ```
     */
    list(query?: GetPublishableApiKeysParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysListRes>;
    /**
     * Create a publishable API key.
     * @param {AdminPostPublishableApiKeysReq} payload - The publishable API key to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysRes>} Resolves to the publishbale API key's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.create({
     *  title
     * })
     * .then(({ publishable_api_key }) => {
     *   console.log(publishable_api_key.id)
     * })
     */
    create(payload: AdminPostPublishableApiKeysReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    /**
     * Update a publishable API key's details.
     * @param {string} id - The ID of the publishable API key.
     * @param {AdminPostPublishableApiKeysPublishableApiKeyReq} payload - The attributes to update in the publishable API key.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysRes>} Resolves to the publishbale API key's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.update(publishableApiKeyId, {
     *   title: "new title"
     * })
     * .then(({ publishable_api_key }) => {
     *   console.log(publishable_api_key.id)
     * })
     */
    update(id: string, payload: AdminPostPublishableApiKeysPublishableApiKeyReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    /**
     * Delete a publishable API key. Associated resources, such as sales channels, are not deleted.
     * @param {string} id  - The ID of the publishable API key
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeyDeleteRes>} Resolves to the delete operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.delete(publishableApiKeyId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeyDeleteRes>;
    /**
     * Revoke a publishable API key. Revoking the publishable API Key can't be undone, and the key can't be used in future requests.
     * @param {string} id - The ID of the publishable API key.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysRes>} Resolves to the publishbale API key's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.revoke(publishableApiKeyId)
     * .then(({ publishable_api_key }) => {
     *   console.log(publishable_api_key.id)
     * })
     */
    revoke(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    /**
     * Add a list of sales channels to a publishable API key.
     * @param {string} id - The ID of the publishable API key.
     * @param {AdminPostPublishableApiKeySalesChannelsBatchReq} payload - The sales channels to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysRes>} Resolves to the publishbale API key's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.addSalesChannelsBatch(publishableApiKeyId, {
     *   sales_channel_ids: [
     *     {
     *       id: channelId
     *     }
     *   ]
     * })
     * .then(({ publishable_api_key }) => {
     *   console.log(publishable_api_key.id);
     * })
     */
    addSalesChannelsBatch(id: string, payload: AdminPostPublishableApiKeySalesChannelsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    /**
     * Remove a list of sales channels from a publishable API key. This doesn't delete the sales channels and only removes the association between them and the publishable API key.
     * @param {string} id - The ID of the publishable API key.
     * @param {AdminDeletePublishableApiKeySalesChannelsBatchReq} payload - The sales channels to delete from the publishable API key.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysRes>} Resolves to the publishbale API key's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.deleteSalesChannelsBatch(publishableApiKeyId, {
     *   sales_channel_ids: [
     *     {
     *       id: channelId
     *     }
     *   ]
     * })
     * .then(({ publishable_api_key }) => {
     *   console.log(publishable_api_key.id);
     * })
     */
    deleteSalesChannelsBatch(id: string, payload: AdminDeletePublishableApiKeySalesChannelsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysRes>;
    /**
     * List the sales channels associated with a publishable API key. The sales channels can be filtered by fields such as `q` passed in the `query` parameter.
     * @param {string} id - The ID of the publishable API key.
     * @param {GetPublishableApiKeySalesChannelsParams} query - Filters to apply on the retrieved sales channels.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPublishableApiKeysListSalesChannelsRes>} Resolves to the list of sales channels.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.publishableApiKeys.listSalesChannels()
     * .then(({ sales_channels }) => {
     *   console.log(sales_channels.length)
     * })
     */
    listSalesChannels(id: string, query?: GetPublishableApiKeySalesChannelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminPublishableApiKeysListSalesChannelsRes>;
}

/**
 * This class is used to send requests to [Admin Region API Routes](https://docs.medusajs.com/api/admin#regions). All its method
 * are available in the JS Client under the `medusa.admin.regions` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Regions are different countries or geographical regions that the commerce store serves customers in.
 * Admins can manage these regions, their providers, and more.
 *
 * Related Guide: [How to manage regions](https://docs.medusajs.com/modules/regions-and-currencies/admin/manage-regions).
 */
declare class AdminRegionsResource extends BaseResource {
    /**
     * Create a region.
     * @param {AdminPostRegionsReq} payload - The region to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.create({
     *   name: "Europe",
     *   currency_code: "eur",
     *   tax_rate: 0,
     *   payment_providers: [
     *     "manual"
     *   ],
     *   fulfillment_providers: [
     *     "manual"
     *   ],
     *   countries: [
     *     "DK"
     *   ]
     * })
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    create(payload: AdminPostRegionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Update a region's details.
     * @param {string} id - The region's ID.
     * @param {AdminPostRegionsRegionReq} payload - The attributes to update in the region.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.update(regionId, {
     *   name: "Europe"
     * })
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    update(id: string, payload: AdminPostRegionsRegionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Delete a region. Associated resources, such as providers or currencies are not deleted. Associated tax rates are deleted.
     * @param {string} id - The region's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.delete(regionId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsDeleteRes>;
    /**
     * Retrieve a region's details.
     * @param {string} id - The region's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>}  Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.retrieve(regionId)
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Retrieve a list of Regions. The regions can be filtered by fields such as `created_at` passed in the `query` parameter. The regions can also be paginated.
     * @param {AdminGetRegionsParams} query - Filters and pagination configurations to apply on the retrieved regions.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsListRes>} Resolves to the list of regions with pagination fields.
     *
     * @example
     * To list regions:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.list()
     * .then(({ regions, limit, offset, count }) => {
     *   console.log(regions.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.list({
     *   limit,
     *   offset
     * })
     * .then(({ regions, limit, offset, count }) => {
     *   console.log(regions.length);
     * })
     * ```
     */
    list(query?: AdminGetRegionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsListRes>;
    /**
     * Add a country to the list of countries in a region.
     * @param {string} id - The region's ID.
     * @param {AdminPostRegionsRegionCountriesReq} payload - The country to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.addCountry(regionId, {
     *   country_code: "dk"
     * })
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    addCountry(id: string, payload: AdminPostRegionsRegionCountriesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Delete a country from the list of countries in a region. The country will still be available in the system, and it can be used in other regions.
     * @param {string} id - The region's ID.
     * @param {string} country_code - The code of the country to delete from the region.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.deleteCountry(regionId, "dk")
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    deleteCountry(id: string, country_code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Add a fulfillment provider to the list of fulfullment providers in a region.
     * @param {string} id - The region's ID.
     * @param {AdminPostRegionsRegionFulfillmentProvidersReq} payload - The fulfillment provider to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.addFulfillmentProvider(regionId, {
     *   provider_id: "manual"
     * })
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    addFulfillmentProvider(id: string, payload: AdminPostRegionsRegionFulfillmentProvidersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Delete a fulfillment provider from a region. The fulfillment provider will still be available for usage in other regions.
     * @param {string} id - The region's ID.
     * @param {string} provider_id - The ID of the fulfillment provider to delete from the region.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.deleteFulfillmentProvider(regionId, "manual")
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    deleteFulfillmentProvider(id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Retrieve a list of fulfillment options available in a region.
     * @param {string} id - The region's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGetRegionsRegionFulfillmentOptionsRes>} Resolves to the list of fulfillment options.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.retrieveFulfillmentOptions(regionId)
     * .then(({ fulfillment_options }) => {
     *   console.log(fulfillment_options.length);
     * })
     */
    retrieveFulfillmentOptions(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGetRegionsRegionFulfillmentOptionsRes>;
    /**
     * Add a payment provider to the list of payment providers in a region.
     * @param {string} id - The region's ID.
     * @param {AdminPostRegionsRegionPaymentProvidersReq} payload - The payment provider to add.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.addPaymentProvider(regionId, {
     *   provider_id: "manual"
     * })
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    addPaymentProvider(id: string, payload: AdminPostRegionsRegionPaymentProvidersReq, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
    /**
     * Delete a payment provider from a region. The payment provider will still be available for usage in other regions.
     * @param {string} id - The region's ID.
     * @param {string} provider_id - The ID of the payment provider to delete from the region.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminRegionsRes>} Resolves to the region's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.regions.deletePaymentProvider(regionId, "manual")
     * .then(({ region }) => {
     *   console.log(region.id);
     * })
     */
    deletePaymentProvider(id: string, provider_id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminRegionsRes>;
}

/**
 * This class is used to send requests to [Admin Reservation API Routes](https://docs.medusajs.com/api/admin#reservations). To use these API Routes, make sure to install the
 * [@medusajs/inventory](https://docs.medusajs.com/modules/multiwarehouse/install-modules#inventory-module) module in your Medusa backend.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}. The methods
 * are available in the JS Client under the `medusa.admin.reservations` property.
 *
 * Reservations, provided by the [Inventory Module](https://docs.medusajs.com/modules/multiwarehouse/inventory-module), are quantities of an item that are reserved, typically when an order is placed but not yet fulfilled.
 * Reservations can be associated with any resources, but commonly with line items of an order.
 *
 * Related Guide: [How to manage item allocations in orders](https://docs.medusajs.com/modules/multiwarehouse/admin/manage-item-allocations-in-orders).
 */
declare class AdminReservationsResource extends BaseResource {
    /**
     * Retrieve a reservation's details.
     * @param {string} id - The reservation's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReservationsRes>} Resolves to the reservation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.retrieve(reservationId)
     * .then(({ reservation }) => {
     *   console.log(reservation.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsRes>;
    /**
     * Retrieve a list of reservations. The reservations can be filtered by fields such as `location_id` or `quantity` passed in the `query` parameter. The reservations can also be paginated.
     * @param {AdminGetReservationsParams} query - Filters and pagination parameters to apply on the retrieved reservations.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReservationsListRes>} Resolves to the list of reservations with pagination fields.
     *
     * @example
     * To list reservations:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.list()
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations.length)
     * })
     * ```
     *
     * To specify relations that should be retrieved within the reservations:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.list({
     *   expand: "location"
     * })
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations.length)
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.list({
     *   expand: "location",
     *   limit,
     *   offset
     * })
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations.length)
     * })
     * ```
     */
    list(query?: AdminGetReservationsParams, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsListRes>;
    /**
     * Create a reservation which can be associated with any resource, such as an order's line item.
     * @param {AdminPostReservationsReq} payload - The reservation to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReservationsRes>} Resolves to the reservation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.create({
     *   line_item_id: "item_123",
     *   location_id: "loc_123",
     *   inventory_item_id: "iitem_123",
     *   quantity: 1
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation.id);
     * });
     */
    create(payload: AdminPostReservationsReq, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsRes>;
    /**
     * Update a reservation's details.
     * @param {string} id - The ID of the reservation.
     * @param {AdminPostReservationsReservationReq} payload - The attributes to update in the reservation.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReservationsRes>} Resolves to the reservation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.update(reservationId, {
     *   quantity: 3
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation.id);
     * });
     */
    update(id: string, payload: AdminPostReservationsReservationReq, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsRes>;
    /**
     * Delete a reservation. Associated resources, such as the line item, will not be deleted.
     * @param {string} id - The ID of the reservation.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReservationsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.reservations.delete(reservationId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * });
     */
    delete(id: string, customHeaders?: Record<string, unknown>): ResponsePromise<AdminReservationsDeleteRes>;
}

/**
 * This class is used to send requests to [Admin Return Reason API Routes](https://docs.medusajs.com/api/admin#return-reasons). All its method
 * are available in the JS Client under the `medusa.admin.returnReasons` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Return reasons are key-value pairs that are used to specify why an order return is being created.
 * Admins can manage available return reasons, and they can be used by both admins and customers when creating a return.
 *
 * Related Guide: [How to manage return reasons](https://docs.medusajs.com/modules/orders/admin/manage-returns#manage-return-reasons).
 */
declare class AdminReturnReasonsResource extends BaseResource {
    /**
     * Create a return reason.
     * @param {AdminPostReturnReasonsReq} payload - The return reason to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnReasonsRes>} Resolves to the return reason's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returnReasons.create({
     *   label: "Damaged",
     *   value: "damaged"
     * })
     * .then(({ return_reason }) => {
     *   console.log(return_reason.id);
     * });
     */
    create(payload: AdminPostReturnReasonsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsRes>;
    /**
     * Update a return reason's details.
     * @param {string} id - The return reason's ID.
     * @param {AdminPostReturnReasonsReasonReq} payload - The attributes to update in the return reason.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnReasonsRes>} Resolves to the return reason's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returnReasons.update(returnReasonId, {
     *   label: "Damaged"
     * })
     * .then(({ return_reason }) => {
     *   console.log(return_reason.id);
     * });
     */
    update(id: string, payload: AdminPostReturnReasonsReasonReq, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsRes>;
    /**
     * Delete a return reason.
     * @param {string} id - The ID of the return reason.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnReasonsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returnReasons.delete(returnReasonId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * });
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsDeleteRes>;
    /**
     * Retrieve a return reason's details.
     * @param {string} id - The return reason's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnReasonsRes>} Resolves to the return reason's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returnReasons.retrieve(returnReasonId)
     * .then(({ return_reason }) => {
     *   console.log(return_reason.id);
     * });
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsRes>;
    /**
     * Retrieve a list of return reasons.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnReasonsListRes>} Resolves to the list of return reasons.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returnReasons.list()
     * .then(({ return_reasons }) => {
     *   console.log(return_reasons.length);
     * });
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminReturnReasonsListRes>;
}

/**
 * This class is used to send requests to [Admin Return API Routes](https://docs.medusajs.com/api/admin#returns). All its method
 * are available in the JS Client under the `medusa.admin.returns` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A return can be created by a customer or an admin to return items in an order.
 * Admins can manage these returns and change their state.
 *
 * Related Guide: [How to manage returns](https://docs.medusajs.com/modules/orders/admin/manage-returns).
 */
declare class AdminReturnsResource extends BaseResource {
    /**
     * Register a return as canceled. The return can be associated with an order, claim, or swap.
     * @param {string} id - The return's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnsCancelRes>} Resolves to the details of the order associated with the return. If the return is associated with a claim or a swap, then it'll be the order
     * that the claim or swap belongs to.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returns.cancel(returnId)
     * .then(({ order }) => {
     *   console.log(order.id);
     * });
     */
    cancel(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnsCancelRes>;
    /**
     * Mark a return as received. This also updates the status of associated order, claim, or swap accordingly.
     * @param {string} id - The return's ID.
     * @param {AdminPostReturnsReturnReceiveReq} payload - The received return.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnsRes>} Resolves to the return's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returns.receive(returnId, {
     *   items: [
     *     {
     *       item_id,
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then((data) => {
     *   console.log(data.return.id);
     * });
     */
    receive(id: string, payload: AdminPostReturnsReturnReceiveReq, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnsRes>;
    /**
     * Retrieve a list of Returns. The returns can be paginated.
     * @param {AdminGetReturnsParams} query - Paignation configurations to be applied on the retrieved returns.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminReturnsListRes>} Resolves to the list of returns with pagination fields.
     *
     * @example
     * To list returns:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returns.list()
     * .then(({ returns, limit, offset, count }) => {
     *   console.log(returns.length)
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.returns.list({
     *   limit,
     *   offset
     * })
     * .then(({ returns, limit, offset, count }) => {
     *   console.log(returns.length)
     * })
     * ```
     */
    list(query?: AdminGetReturnsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminReturnsListRes>;
}

/**
 * This class is used to send requests to [Admin Sales Channel API Routes](https://docs.medusajs.com/api/admin#sales-channels). All its method
 * are available in the JS Client under the `medusa.admin.salesChannels` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A sales channel indicates a channel where products can be sold in. For example, a webshop or a mobile app.
 * Admins can manage sales channels and the products available in them.
 *
 * Related Guide: [How to manage sales channels](https://docs.medusajs.com/modules/sales-channels/admin/manage).
 */
declare class AdminSalesChannelsResource extends BaseResource {
    /**
     * Retrieve a sales channel's details.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.retrieve(salesChannelId)
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id)
     * })
     */
    retrieve(salesChannelId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Create a sales channel.
     * @param {AdminPostSalesChannelsReq} payload - The sales channel to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.create({
     *   name: "App",
     *   description: "Mobile app"
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id);
     * })
     */
    create(payload: AdminPostSalesChannelsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Update a sales channel's details.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {AdminPostSalesChannelsSalesChannelReq} payload - The attributes to update in the sales channel.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.update(salesChannelId, {
     *   name: "App"
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id)
     * })
     */
    update(salesChannelId: string, payload: AdminPostSalesChannelsSalesChannelReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Retrieve a list of sales channels. The sales channels can be filtered by fields such as `q` or `name` passed in the `query` parameter. The sales channels can also be sorted or paginated.
     * @param {AdminGetSalesChannelsParams} query - Filters and pagination configurations applied on the retrieved sales channels.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsListRes>} Resolves to the list of sales channels with pagination fields.
     *
     * @example
     * To list sales channels:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.list()
     * .then(({ sales_channels, limit, offset, count }) => {
     *   console.log(sales_channels.length)
     * })
     * ```
     *
     * To specify relations that should be retrieved within the sales channels:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.list({
     *   expand: "locations"
     * })
     * .then(({ sales_channels, limit, offset, count }) => {
     *   console.log(sales_channels.length)
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.list({
     *   expand: "locations",
     *   limit,
     *   offset
     * })
     * .then(({ sales_channels, limit, offset, count }) => {
     *   console.log(sales_channels.length)
     * })
     * ```
     */
    list(query?: AdminGetSalesChannelsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsListRes>;
    /**
     * Delete a sales channel. Associated products, stock locations, and other resources are not deleted.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.delete(salesChannelId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    delete(salesChannelId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsDeleteRes>;
    /**
     * Remove a list of products from a sales channel. This doesn't delete the product. It only removes the association between the product and the sales channel.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {AdminDeleteSalesChannelsChannelProductsBatchReq} payload - The products to remove from the sales channel.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.removeProducts(salesChannelId, {
     *   product_ids: [
     *     {
     *       id: productId
     *     }
     *   ]
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id)
     * })
     */
    removeProducts(salesChannelId: string, payload: AdminDeleteSalesChannelsChannelProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Add a list of products to a sales channel.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {AdminPostSalesChannelsChannelProductsBatchReq} payload - The products to add to the sales channel.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.addProducts(salesChannelId, {
     *   product_ids: [
     *     {
     *       id: productId
     *     }
     *   ]
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id)
     * })
     */
    addProducts(salesChannelId: string, payload: AdminPostSalesChannelsChannelProductsBatchReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Associate a stock location with a sales channel. It requires the
     * [@medusajs/stock-location](https://docs.medusajs.com/modules/multiwarehouse/install-modules#stock-location-module) module to be installed in
     * your Medusa backend.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {AdminPostSalesChannelsChannelStockLocationsReq} payload - The stock location to associate with the sales channel.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.addLocation(salesChannelId, {
     *   location_id: "loc_123"
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id)
     * })
     */
    addLocation(salesChannelId: string, payload: AdminPostSalesChannelsChannelStockLocationsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
    /**
     * Remove a stock location from a sales channel. This only removes the association between the stock location and the sales channel. It does not delete the stock location.
     * @param {string} salesChannelId - The sales channel's ID.
     * @param {AdminDeleteSalesChannelsChannelStockLocationsReq} payload - The stock location to remove from the sales channel.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSalesChannelsRes>} Resolves to the sales channel's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.salesChannels.removeLocation(salesChannelId, {
     *   location_id: "loc_id"
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel.id);
     * })
     */
    removeLocation(salesChannelId: string, payload: AdminDeleteSalesChannelsChannelStockLocationsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminSalesChannelsRes>;
}

/**
 * This class is used to send requests to [Admin Shipping Option API Routes](https://docs.medusajs.com/api/admin#shipping-options). All its method
 * are available in the JS Client under the `medusa.admin.shippingOptions` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A shipping option is used to define the available shipping methods during checkout or when creating a return.
 * Admins can create an unlimited number of shipping options, each associated with a shipping profile and fulfillment provider, among other resources.
 *
 * Related Guide: [Shipping Option architecture](https://docs.medusajs.com/modules/carts-and-checkout/shipping#shipping-option).
 */
declare class AdminShippingOptionsResource extends BaseResource {
    /**
     * Create a shipping option.
     * @param {AdminPostShippingOptionsReq} payload - The shipping option to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingOptionsRes>} Resolves to the shipping option's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingOptions.create({
     *   name: "PostFake",
     *   region_id,
     *   provider_id,
     *   data: {
     *   },
     *   price_type: "flat_rate"
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option.id)
     * })
     */
    create(payload: AdminPostShippingOptionsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsRes>;
    /**
     * Update a shipping option's details.
     * @param {string} id - The shipping option's ID.
     * @param {AdminPostShippingOptionsOptionReq} payload - The attributes to update in the shipping option.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingOptionsRes>} Resolves to the shipping option's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingOptions.update(optionId, {
     *   name: "PostFake",
     *   requirements: [
     *     {
     *       id,
     *       type: "max_subtotal",
     *       amount: 1000
     *     }
     *   ]
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option.id)
     * })
     */
    update(id: string, payload: AdminPostShippingOptionsOptionReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsRes>;
    /**
     * Delete a shipping option. Once deleted, it can't be used when creating orders or returns.
     * @param {string} id - The shipping option's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingOptionsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingOptions.delete(optionId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsDeleteRes>;
    /**
     * Retrieve a shipping option's details.
     * @param {string} id - The shipping option's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingOptionsRes>} Resolves to the shipping option's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingOptions.retrieve(optionId)
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsRes>;
    /**
     * Retrieve a list of shipping options. The shipping options can be filtered by fields such as `region_id` or `is_return` passed in the `query` parameter.
     * @param {AdminGetShippingOptionsParams} query - Filters to apply on the retrieved shipping options.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingOptionsListRes>} Resolves to the list of shipping options.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingOptions.list()
     * .then(({ shipping_options, count }) => {
     *   console.log(shipping_options.length);
     * })
     */
    list(query?: AdminGetShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingOptionsListRes>;
}

/**
 * This class is used to send requests to [Admin Shipping Profile API Routes](https://docs.medusajs.com/api/admin#shipping-profiles). All its method
 * are available in the JS Client under the `medusa.admin.shippingProfiles` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A shipping profile is used to group products that can be shipped in the same manner.
 * They are created by the admin and they're not associated with a fulfillment provider.
 *
 * Related Guide: [Shipping Profile architecture](https://docs.medusajs.com/modules/carts-and-checkout/shipping#shipping-profile).
 */
declare class AdminShippingProfilesResource extends BaseResource {
    /**
     * Create a shipping profile.
     * @param {AdminPostShippingProfilesReq} payload - The shipping profile to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingProfilesRes>} Resolves to the shipping profile's details.
     *
     * @example
     * import { ShippingProfileType } from "@medusajs/medusa"
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingProfiles.create({
     *   name: "Large Products",
     *   type: ShippingProfileType.DEFAULT
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile.id);
     * })
     */
    create(payload: AdminPostShippingProfilesReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesRes>;
    /**
     * Update a shipping profile's details.
     * @param {string} id - The shipping profile's ID.
     * @param {AdminPostShippingProfilesProfileReq} payload - The attributes to update in the shipping profile.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingProfilesRes>} Resolves to the shipping profile's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingProfiles.update(shippingProfileId, {
     *   name: 'Large Products'
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile.id);
     * })
     */
    update(id: string, payload: AdminPostShippingProfilesProfileReq, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesRes>;
    /**
     * Delete a shipping profile. Associated shipping options are deleted as well.
     * @param {string} id - The shipping profile's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDeleteShippingProfileRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingProfiles.delete(profileId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteShippingProfileRes>;
    /**
     * Retrieve a shipping profile's details.
     * @param {string} id - The shipping profile's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingProfilesRes>} Resolves to the shipping profile's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingProfiles.retrieve(profileId)
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesRes>;
    /**
     * Retrieve a list of shipping profiles.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminShippingProfilesListRes>} Resolves to the list of shipping profiles.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.shippingProfiles.list()
     * .then(({ shipping_profiles }) => {
     *   console.log(shipping_profiles.length);
     * })
     */
    list(customHeaders?: Record<string, any>): ResponsePromise<AdminShippingProfilesListRes>;
}

/**
 * This class is used to send requests to [Admin Stock Location API Routes](https://docs.medusajs.com/api/admin#stock-locations). To use these API Routes, make sure to install the
 * [@medusajs/stock-location](https://docs.medusajs.com/modules/multiwarehouse/install-modules#stock-location-module) module in your Medusa backend.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}. The methods
 * are available in the JS Client under the `medusa.admin.stockLocations` property.
 *
 * A stock location, provided by the [Stock Location module](https://docs.medusajs.com/modules/multiwarehouse/stock-location-module), indicates a physical address that stock-kept items, such as physical products, can be stored in.
 * An admin can create and manage available stock locations.
 *
 * Related Guide: [How to manage stock locations](https://docs.medusajs.com/modules/multiwarehouse/admin/manage-stock-locations).
 */
declare class AdminStockLocationsResource extends BaseResource {
    /**
     * Create a stock location.
     * @param {AdminPostStockLocationsReq} payload - The stock location to be created.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStockLocationsRes>} Resolves to the stock location's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.create({
     *   name: "Main Warehouse",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location.id);
     * })
     */
    create(payload: AdminPostStockLocationsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsRes>;
    /**
     * Retrieve a stock location's details.
     * @param {string} itemId - The stock location's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStockLocationsRes>} Resolves to the stock location's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.retrieve(stockLocationId)
     * .then(({ stock_location }) => {
     *   console.log(stock_location.id);
     * })
     */
    retrieve(itemId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsRes>;
    /**
     * Update a stock location's details.
     * @param {string} stockLocationId - The stock location's ID.
     * @param {AdminPostStockLocationsLocationReq} payload - The attributes to be updated in the stock location.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStockLocationsRes>} Resolves to the stock location's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.update(stockLocationId, {
     *   name: 'Main Warehouse'
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location.id);
     * })
     */
    update(stockLocationId: string, payload: AdminPostStockLocationsLocationReq, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsRes>;
    /**
     * Delete a stock location.
     * @param {string} id - The stock location's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStockLocationsDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.delete(stockLocationId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id)
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsDeleteRes>;
    /**
     * Retrieve a list of stock locations. The stock locations can be filtered by fields such as `name` or `created_at` passed in the `query` parameter.
     * The stock locations can also be sorted or paginated.
     * @param {AdminGetStockLocationsParams} query - Filters and pagination configurations to apply on the retrieved stock locations.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStockLocationsListRes>} Resolves to the list of stock locations with pagination fields.
     *
     * @example
     * To list stock locations:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.list()
     * .then(({ stock_locations, limit, offset, count }) => {
     *   console.log(stock_locations.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the stock locations:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.list({
     *   expand: "address"
     * })
     * .then(({ stock_locations, limit, offset, count }) => {
     *   console.log(stock_locations.length);
     * })
     * ```
     *
     * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.stockLocations.list({
     *   expand: "address",
     *   limit,
     *   offset
     * })
     * .then(({ stock_locations, limit, offset, count }) => {
     *   console.log(stock_locations.length);
     * })
     * ```
     */
    list(query?: AdminGetStockLocationsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminStockLocationsListRes>;
}

/**
 * This class is used to send requests to [Admin Store API Routes](https://docs.medusajs.com/api/admin#store). All its method
 * are available in the JS Client under the `medusa.admin.store` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A store indicates the general configurations and details about the commerce store. By default, there's only one store in the Medusa backend.
 * Admins can manage the store and its details or configurations.
 */
declare class AdminStoresResource extends BaseResource {
    /**
     * Update the store's details.
     * @param {AdminPostStoreReq} payload - The attributes to update in the store.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStoresRes>} Resolves to the store's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.store.update({
     *   name: "Medusa Store"
     * })
     * .then(({ store }) => {
     *   console.log(store.id);
     * })
     */
    update(payload: AdminPostStoreReq, customHeaders?: Record<string, any>): ResponsePromise<AdminStoresRes>;
    /**
     * Add a currency code to the available currencies in a store. This doesn't create new currencies, as currencies are defined within the Medusa backend.
     * To create a currency, you can [create a migration](https://docs.medusajs.com/development/entities/migrations/create) that inserts the currency into the database.
     * @param {string} currency_code - The code of the currency to add to the store.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStoresRes>} Resolves to the store's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.store.addCurrency("eur")
     * .then(({ store }) => {
     *   console.log(store.currencies);
     * })
     */
    addCurrency(currency_code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStoresRes>;
    /**
     * Delete a currency code from the available currencies in a store. This doesn't completely delete the currency and it can be added again later to the store.
     * @param {string} currency_code - The code of the currency to delete from the store.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminStoresRes>} Resolves to the store's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.store.deleteCurrency("eur")
     * .then(({ store }) => {
     *   console.log(store.currencies);
     * })
     */
    deleteCurrency(currency_code: string, customHeaders?: Record<string, any>): ResponsePromise<AdminStoresRes>;
    /**
     * Retrieve the store's details.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminExtendedStoresRes>} Resolves to the store's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.store.retrieve()
     * .then(({ store }) => {
     *   console.log(store.id);
     * })
     */
    retrieve(customHeaders?: Record<string, any>): ResponsePromise<AdminExtendedStoresRes>;
    /**
     * Retrieve a list of available payment providers in a store.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminPaymentProvidersList>} Resolves to the list of payment providers.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.store.listPaymentProviders()
     * .then(({ payment_providers }) => {
     *   console.log(payment_providers.length);
     * })
     */
    listPaymentProviders(customHeaders?: Record<string, any>): ResponsePromise<AdminPaymentProvidersList>;
    /**
     * Retrieve a list of available tax providers in a store.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxProvidersList>} Resolves to the list of tax providers.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.store.listTaxProviders()
     * .then(({ tax_providers }) => {
     *   console.log(tax_providers.length);
     * })
     */
    listTaxProviders(customHeaders?: Record<string, any>): ResponsePromise<AdminTaxProvidersList>;
}

/**
 * This class is used to send requests to [Admin Swap API Routes](https://docs.medusajs.com/api/admin#swaps). All its method
 * are available in the JS Client under the `medusa.admin.swaps` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A swap is created by a customer or an admin to exchange an item with a new one.
 * Creating a swap implicitely includes creating a return for the item being exchanged.
 *
 * Related Guide: [How to manage swaps](https://docs.medusajs.com/modules/orders/admin/manage-swaps)
 */
declare class AdminSwapsResource extends BaseResource {
    /**
     * Retrieve a swap's details.
     * @param {string} id - The swap's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSwapsRes>} Resolves to the swap's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.swaps.retrieve(swapId)
     * .then(({ swap }) => {
     *   console.log(swap.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminSwapsRes>;
    /**
     * Retrieve a list of swaps. The swaps can be paginated.
     * @param {AdminGetSwapsParams} query - Pagination configurations to apply on the retrieved swaps.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminSwapsListRes>} Resolves to the list of swaps with pagination fields.
     *
     * @example
     * To list swaps:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.swaps.list()
     * .then(({ swaps }) => {
     *   console.log(swaps.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.swaps.list({
     *   limit,
     *   offset
     * })
     * .then(({ swaps }) => {
     *   console.log(swaps.length);
     * })
     * ```
     */
    list(query?: AdminGetSwapsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminSwapsListRes>;
}

/**
 * This class is used to send requests to [Admin Tax Rate API Routes](https://docs.medusajs.com/api/admin#tax-rates). All its method
 * are available in the JS Client under the `medusa.admin.taxRates` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Each region has at least a default tax rate. Admins can create and manage additional tax rates that can be applied for certain conditions, such as for specific product types.
 *
 * Related Guide: [How to manage tax rates](https://docs.medusajs.com/modules/taxes/admin/manage-tax-rates).
 */
declare class AdminTaxRatesResource extends BaseResource {
    /**
     * Retrieve a tax rate's details.
     * @param {string} id - The tax rate's ID.
     * @param {AdminGetTaxRatesTaxRateParams} query - Configurations to apply on retrieved tax rates.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * A simple example that retrieves a tax rate by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.retrieve(taxRateId)
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.retrieve(taxRateId, {
     *   expand: "shipping_options"
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     * ```
     */
    retrieve(id: string, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Retrieve a list of tax rates. The tax rates can be filtered by fields such as `name` or `rate` passed in the `query` parameter. The tax rates can also be paginated.
     * @param {AdminGetTaxRatesParams} query - Filters and pagination configurations applied to the retrieved tax rates.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesListRes>} Resolves to the list of tax rates with pagination fields.
     *
     * @example
     * To list tax rates:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.list()
     * .then(({ tax_rates, limit, offset, count }) => {
     *   console.log(tax_rates.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the tax rates:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.list({
     *   expand: ["shipping_options"]
     * })
     * .then(({ tax_rates, limit, offset, count }) => {
     *   console.log(tax_rates.length);
     * })
     * ```
     *
     * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.list({
     *   expand: ["shipping_options"],
     *   limit,
     *   offset
     * })
     * .then(({ tax_rates, limit, offset, count }) => {
     *   console.log(tax_rates.length);
     * })
     * ```
     */
    list(query?: AdminGetTaxRatesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesListRes>;
    /**
     * Create a tax rate.
     * @param {AdminPostTaxRatesReq} payload - The tax rate to create.
     * @param {AdminPostTaxRatesParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.create({
     *   code: "TEST",
     *   name: "New Tax Rate",
     *   region_id
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    create(payload: AdminPostTaxRatesReq, query?: AdminPostTaxRatesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Update a tax rate's details.
     * @param {string} id - The tax rate's ID.
     * @param {AdminPostTaxRatesTaxRateReq} payload - The attributes to update in the tax rate.
     * @param {AdminPostTaxRatesTaxRateParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.update(taxRateId, {
     *   name: "New Tax Rate"
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    update(id: string, payload: AdminPostTaxRatesTaxRateReq, query?: AdminPostTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Add products to a tax rate.
     * @param {string} id - The tax rate's ID.
     * @param {AdminPostTaxRatesTaxRateProductsReq} payload - The products to add to the tax rate.
     * @param {AdminPostTaxRatesTaxRateProductsParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.addProducts(taxRateId, {
     *   products: [
     *     productId
     *   ]
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    addProducts(id: string, payload: AdminPostTaxRatesTaxRateProductsReq, query?: AdminPostTaxRatesTaxRateProductsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Add product types to a tax rate.
     * @param {string} id - The tax rate's ID.
     * @param {AdminPostTaxRatesTaxRateProductTypesReq} payload - The product types to add to the tax rate.
     * @param {AdminGetTaxRatesTaxRateParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.addProductTypes(taxRateId, {
     *   product_types: [
     *     productTypeId
     *   ]
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    addProductTypes(id: string, payload: AdminPostTaxRatesTaxRateProductTypesReq, query?: AdminGetTaxRatesTaxRateParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Add shipping options to a tax rate.
     * @param {string} id - The tax rate's ID.
     * @param {AdminPostTaxRatesTaxRateShippingOptionsReq} payload - The shipping options to add to the tax rate.
     * @param {AdminPostTaxRatesTaxRateShippingOptionsParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.addShippingOptions(taxRateId, {
     *   shipping_options: [
     *     shippingOptionId
     *   ]
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    addShippingOptions(id: string, payload: AdminPostTaxRatesTaxRateShippingOptionsReq, query?: AdminPostTaxRatesTaxRateShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Remove products from a tax rate. This only removes the association between the products and the tax rate. It does not delete the products.
     * @param {string} id - The tax rate's ID.
     * @param {AdminDeleteTaxRatesTaxRateProductsReq} payload - The products to remove from the tax rate.
     * @param {AdminGetTaxRatesTaxRateParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.removeProducts(taxRateId, {
     *   products: [
     *     productId
     *   ]
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    removeProducts(id: string, payload: AdminDeleteTaxRatesTaxRateProductsReq, query?: AdminDeleteTaxRatesTaxRateProductsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Remove product types from a tax rate. This only removes the association between the product types and the tax rate. It does not delete the product types.
     * @param {string} id - The tax rate's ID.
     * @param {AdminDeleteTaxRatesTaxRateProductTypesReq} payload - The product types to remove from the tax rate.
     * @param {AdminGetTaxRatesTaxRateParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.removeProductTypes(taxRateId, {
     *   product_types: [
     *     productTypeId
     *   ]
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    removeProductTypes(id: string, payload: AdminDeleteTaxRatesTaxRateProductTypesReq, query?: AdminDeleteTaxRatesTaxRateProductTypesParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Remove shipping options from a tax rate. This only removes the association between the shipping options and the tax rate. It does not delete the shipping options.
     * @param {string} id - The tax rate's ID.
     * @param {AdminDeleteTaxRatesTaxRateShippingOptionsReq} payload - The shipping options to remove from the tax rate.
     * @param {AdminGetTaxRatesTaxRateParams} query - Configurations to apply on the retrieved tax rate.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesRes>} Resolves to the tax rate's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.removeShippingOptions(taxRateId, {
     *   shipping_options: [
     *     shippingOptionId
     *   ]
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate.id);
     * })
     */
    removeShippingOptions(id: string, payload: AdminDeleteTaxRatesTaxRateShippingOptionsReq, query?: AdminDeleteTaxRatesTaxRateShippingOptionsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesRes>;
    /**
     * Delete a tax rate. Resources associated with the tax rate, such as products or product types, are not deleted.
     * @param {string} id - The tax rate's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminTaxRatesDeleteRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.taxRates.delete(taxRateId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminTaxRatesDeleteRes>;
}

/**
 * This class is used to send requests to [Admin Upload API Routes](https://docs.medusajs.com/api/admin#uploads). All its method
 * are available in the JS Client under the `medusa.admin.uploads` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * The methods in this class are used to upload any type of resources. For example, they can be used to upload CSV files that are used to import products into the store.
 *
 * Related Guide: [How to upload CSV file when importing a product](https://docs.medusajs.com/modules/products/admin/import-products#1-upload-csv-file).
 */
declare class AdminUploadsResource extends BaseResource {
    /**
     * @ignore
     * @privateRemarks No need to include this in the generated documentation.
     */
    private headers;
    /**
     * Upload a file or multiple files to a public bucket or storage. The file upload is handled by the file service installed on the Medusa backend.
     * @param {AdminCreateUploadPayload} file - The file(s) to upload.
     * @returns {ResponsePromise<AdminUploadsRes>} Resolves to the uploaded file details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.uploads.create(file)
     * .then(({ uploads }) => {
     *   console.log(uploads.length);
     * })
     */
    create(file: AdminCreateUploadPayload): ResponsePromise<AdminUploadsRes>;
    /**
     * Upload a file to an ACL or a non-public bucket. The file upload is handled by the file service installed on the Medusa backend.
     * @param {AdminCreateUploadPayload} file - The file to upload.
     * @returns {ResponsePromise<AdminUploadsRes>} Resolves to the uploaded file details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.uploads.createProtected(file)
     * .then(({ uploads }) => {
     *   console.log(uploads.length);
     * })
     */
    createProtected(file: AdminCreateUploadPayload): ResponsePromise<AdminUploadsRes>;
    /**
     * Delete an uploaded file from storage. The file is deleted using the installed file service on the Medusa backend.
     * @param {AdminDeleteUploadsReq} payload - The uploaded file to delete.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDeleteUploadsRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.uploads.delete({
     *   file_key
     * })
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(payload: AdminDeleteUploadsReq, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteUploadsRes>;
    /**
     * Create and retrieve a presigned or public download URL for a file. The URL creation is handled by the file service installed on the Medusa backend.
     * @param {AdminPostUploadsDownloadUrlReq} payload - The uploaded file to get a presigned download URL for.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminUploadsDownloadUrlRes>} Resolves to the download URL details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.uploads.getPresignedDownloadUrl({
     *   file_key
     * })
     * .then(({ download_url }) => {
     *   console.log(download_url);
     * })
     */
    getPresignedDownloadUrl(payload: AdminPostUploadsDownloadUrlReq, customHeaders?: Record<string, any>): ResponsePromise<AdminUploadsDownloadUrlRes>;
    private _createPayload;
}

/**
 * This class is used to send requests to [Admin User API Routes](https://docs.medusajs.com/api/admin#users). All its method
 * are available in the JS Client under the `medusa.admin.users` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * A store can have more than one user, each having the same privileges. Admins can manage users, their passwords, and more.
 *
 * Related Guide: [How to manage users](https://docs.medusajs.com/modules/users/admin/manage-users).
 */
declare class AdminUsersResource extends BaseResource {
    /**
     * Generate a password token for an admin user with a given email. This also triggers the `user.password_reset` event. So, if you have a Notification Service installed
     * that can handle this event, a notification, such as an email, will be sent to the user. The token is triggered as part of the `user.password_reset` event's payload.
     * That token must be used later to reset the password using the {@link resetPassword} method.
     * @param {AdminResetPasswordTokenRequest} payload - The user's reset details.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<void>} Resolves when the token is generated successfully.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.sendResetPasswordToken({
     *   email: "user@example.com"
     * })
     * .then(() => {
     *   // successful
     * })
     * .catch(() => {
     *   // error occurred
     * })
     */
    sendResetPasswordToken(payload: AdminResetPasswordTokenRequest, customHeaders?: Record<string, any>): ResponsePromise<void>;
    /**
     * Reset the password of an admin user using their reset password token. You must generate a reset password token first for the user using the {@link sendResetPasswordToken} method,
     * then use that token to reset the password in this method.
     * @param {AdminResetPasswordRequest} payload - The reset details.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminUserRes>} Resolves to the user's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.resetPassword({
     *   token: "supersecrettoken",
     *   password: "supersecret"
     * })
     * .then(({ user }) => {
     *   console.log(user.id);
     * })
     */
    resetPassword(payload: AdminResetPasswordRequest, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * Retrieve an admin user's details.
     * @param {string} id - The user's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminUserRes>} Resolves to the user's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.retrieve(userId)
     * .then(({ user }) => {
     *   console.log(user.id);
     * })
     */
    retrieve(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * Create an admin user. The user has the same privileges as all admin users, and will be able to authenticate and perform admin functionalities right after creation.
     * @param {AdminCreateUserPayload} payload - The user to create.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminUserRes>} Resolves to the user's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.create({
     *   email: "user@example.com",
     *   password: "supersecret"
     * })
     * .then(({ user }) => {
     *   console.log(user.id);
     * })
     */
    create(payload: AdminCreateUserPayload, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * Update an admin user's details.
     * @param {string} id - The user's ID.
     * @param {AdminUpdateUserPayload} payload - The attributes to update in the user.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminUserRes>} Resolves to the user's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.update(userId, {
     *   first_name: "Marcellus"
     * })
     * .then(({ user }) => {
     *   console.log(user.id);
     * })
     */
    update(id: string, payload: AdminUpdateUserPayload, customHeaders?: Record<string, any>): ResponsePromise<AdminUserRes>;
    /**
     * Delete a user. Once deleted, the user will not be able to authenticate or perform admin functionalities.
     * @param {string} id - The user's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminDeleteUserRes>} Resolves to the deletion operation's details.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.delete(userId)
     * .then(({ id, object, deleted }) => {
     *   console.log(id);
     * })
     */
    delete(id: string, customHeaders?: Record<string, any>): ResponsePromise<AdminDeleteUserRes>;
    /**
     * Retrieve all admin users.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminUsersListRes>} Resolves to the list of users.
     *
     * @example
     * To list users:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.list()
     * .then(({ users }) => {
     *   console.log(users.length);
     * })
     * ```
     *
     * By default, only the first `20` users are returned. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.users.list({
     *   limit,
     *   offset
     * })
     * .then(({ users, limit, offset, count }) => {
     *   console.log(users.length);
     * })
     * ```
     */
    list(query?: AdminGetUsersParams, customHeaders?: Record<string, any>): ResponsePromise<AdminUsersListRes>;
}

/**
 * This class is used to send requests to [Admin Product Variant API Routes](https://docs.medusajs.com/api/admin#product-variants). All its method
 * are available in the JS Client under the `medusa.admin.variants` property.
 *
 * All methods in this class require {@link AdminAuthResource.createSession | user authentication}.
 *
 * Product variants are the actual salable item in your store. Each variant is a combination of the different option values available on the product.
 * Product variants can be managed through {@link AdminProductsResource}.
 *
 * Related Guide: [How to manage product variants](https://docs.medusajs.com/modules/products/admin/manage-products#manage-product-variants).
 */
declare class AdminVariantsResource extends BaseResource {
    /**
     * Retrieve a list of product variants. The product variant can be filtered by fields such as `id` or `title` passed in the `query` parameter. The product variant can also be paginated.
     * @param {AdminGetVariantsParams} query - Filters and pagination configurations to apply on the retrieved product variants.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminVariantsListRes>} Resolves to the list of product variants with pagination fields.
     *
     * @example
     * To list product variants:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.variants.list()
     * .then(({ variants, limit, offset, count }) => {
     *   console.log(variants.length);
     * })
     * ```
     *
     * To specify relations that should be retrieved within the product variants:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.variants.list({
     *   expand: "options"
     * })
     * .then(({ variants, limit, offset, count }) => {
     *   console.log(variants.length);
     * })
     * ```
     *
     * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.variants.list({
     *   expand: "options",
     *   limit,
     *   offset
     * })
     * .then(({ variants, limit, offset, count }) => {
     *   console.log(variants.length);
     * })
     * ```
     */
    list(query?: AdminGetVariantsParams, customHeaders?: Record<string, any>): ResponsePromise<AdminVariantsListRes>;
    /**
     * Retrieve a product variant's details.
     * @param {string} id - The product variant's ID.
     * @param {AdminGetVariantParams} query - Configurations to apply on the retrieved product variant.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminVariantsRes>} Resolves to the product variant's details.
     *
     * @example
     * A simple example that retrieves a product variant by its ID:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.variants.retrieve(variantId)
     * .then(({ variant }) => {
     *   console.log(variant.id);
     * })
     * ```
     *
     * To specify relations that should be retrieved:
     *
     * ```ts
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.variants.retrieve(variantId, {
     *   expand: "options"
     * })
     * .then(({ variant }) => {
     *   console.log(variant.id);
     * })
     * ```
     */
    retrieve(id: string, query?: AdminGetVariantParams, customHeaders?: Record<string, any>): ResponsePromise<AdminVariantsRes>;
    /**
     * Retrieve the available inventory of a product variant.
     * @param {string} variantId - The product variant's ID.
     * @param {Record<string, any>} customHeaders - Custom headers to attach to the request.
     * @returns {ResponsePromise<AdminGetVariantsVariantInventoryRes>} Resolves to the inventory details of the product variant.
     *
     * @example
     * import Medusa from "@medusajs/medusa-js"
     * const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
     * // must be previously logged in or use api token
     * medusa.admin.variants.getInventory(variantId)
     * .then(({ variant }) => {
     *   console.log(variant.inventory, variant.sales_channel_availability)
     * })
     */
    getInventory(variantId: string, customHeaders?: Record<string, any>): ResponsePromise<AdminGetVariantsVariantInventoryRes>;
}

/**
 * This class includes properties used to send requests to the [Admin API Routes](https://docs.medusajs.com/api/admin). All its properties
 * are available in the JS Client under the `medusa.admin` property.
 */
declare class Admin extends BaseResource {
    /**
     * An instance of {@link AdminAuthResource} used to send requests to [Admin Auth API Routes](https://docs.medusajs.com/api/admin#auth).
     */
    auth: AdminAuthResource;
    /**
     * An instance of {@link AdminBatchJobsResource} used to send requests to [Admin Batch Job API Routes](https://docs.medusajs.com/api/admin#batch-jobs).
     */
    batchJobs: AdminBatchJobsResource;
    /**
     * An instance of {@link AdminCustomersResource} used to send requests to [Admin Customer API Routes](https://docs.medusajs.com/api/admin#customers).
     */
    customers: AdminCustomersResource;
    /**
     * An instance of {@link AdminCustomerGroupsResource} used to send requests to [Admin Customer Group API Routes](https://docs.medusajs.com/api/admin#customer-groups).
     */
    customerGroups: AdminCustomerGroupsResource;
    /**
     * An instance of {@link AdminDiscountsResource} used to send requests to [Admin Discount API Routes](https://docs.medusajs.com/api/admin#discounts).
     */
    discounts: AdminDiscountsResource;
    /**
     * An instance of {@link AdminCurrenciesResource} used to send requests to [Admin Currency API Routes](https://docs.medusajs.com/api/admin#currencies_getcurrencies).
     */
    currencies: AdminCurrenciesResource;
    /**
     * An instance of {@link AdminCollectionsResource} used to send requests to [Admin Product Collection API Routes](https://docs.medusajs.com/api/admin#product-collections).
     */
    collections: AdminCollectionsResource;
    /**
     * An instance of {@link AdminDraftOrdersResource} used to send requests to [Admin Draft Order API Routes](https://docs.medusajs.com/api/admin#draft-orders).
     */
    draftOrders: AdminDraftOrdersResource;
    /**
     * An instance of {@link AdminGiftCardsResource} used to send requests to [Admin Gift Card API Routes](https://docs.medusajs.com/api/admin#gift-cards).
     */
    giftCards: AdminGiftCardsResource;
    /**
     * An instance of {@link AdminInvitesResource} used to send requests to [Admin Invite API Routes](https://docs.medusajs.com/api/admin#invites).
     */
    invites: AdminInvitesResource;
    /**
     * An instance of {@link AdminInventoryItemsResource} used to send requests to [Admin Inventory Item API Routes](https://docs.medusajs.com/api/admin#inventory-items).
     */
    inventoryItems: AdminInventoryItemsResource;
    /**
     * An instance of {@link AdminNotesResource} used to send requests to [Admin Note API Routes](https://docs.medusajs.com/api/admin#notes).
     */
    notes: AdminNotesResource;
    /**
     * An instance of {@link AdminPriceListResource} used to send requests to [Admin Price List API Routes](https://docs.medusajs.com/api/admin#price-lists).
     */
    priceLists: AdminPriceListResource;
    /**
     * An instance of {@link AdminProductsResource} used to send requests to [Admin Product API Routes](https://docs.medusajs.com/api/admin#products).
     */
    products: AdminProductsResource;
    /**
     * An instance of {@link AdminProductTagsResource} used to send requests to [Admin Product Tag API Routes](https://docs.medusajs.com/api/admin#product-tags).
     */
    productTags: AdminProductTagsResource;
    /**
     * An instance of {@link AdminProductTypesResource} used to send requests to [Admin Product Type API Routes](https://docs.medusajs.com/api/admin#product-types).
     */
    productTypes: AdminProductTypesResource;
    /**
     * An instance of {@link AdminUsersResource} used to send requests to [Admin User API Routes](https://docs.medusajs.com/api/admin#users).
     */
    users: AdminUsersResource;
    /**
     * An instance of {@link AdminReturnsResource} used to send requests to [Admin Return API Routes](https://docs.medusajs.com/api/admin#returns).
     */
    returns: AdminReturnsResource;
    /**
     * An instance of {@link AdminOrdersResource} used to send requests to [Admin Order API Routes](https://docs.medusajs.com/api/admin#orders).
     */
    orders: AdminOrdersResource;
    /**
     * An instance of {@link AdminOrderEditsResource} used to send requests to [Admin Order Edit API Routes](https://docs.medusajs.com/api/admin#order-edits).
     */
    orderEdits: AdminOrderEditsResource;
    /**
     * An instance of {@link AdminPublishableApiKeyResource} used to send requests to [Admin Publishable API Key API Routes](https://docs.medusajs.com/api/admin#publishable-api-keys).
     */
    publishableApiKeys: AdminPublishableApiKeyResource;
    /**
     * An instance of {@link AdminReturnReasonsResource} used to send requests to [Admin Return Reason API Routes](https://docs.medusajs.com/api/admin#return-reasons).
     */
    returnReasons: AdminReturnReasonsResource;
    /**
     * @props variants - An instance of {@link AdminVariantsResource} used to send requests to [Admin Product Variant API Routes](https://docs.medusajs.com/api/admin#product-variants).
     */
    variants: AdminVariantsResource;
    /**
     * An instance of {@link AdminSalesChannelsResource} used to send requests to [Admin Sales Channel API Routes](https://docs.medusajs.com/api/admin#sales-channels).
     */
    salesChannels: AdminSalesChannelsResource;
    /**
     * An instance of {@link AdminSwapsResource} used to send requests to [Admin Swap API Routes](https://docs.medusajs.com/api/admin#swaps).
     */
    swaps: AdminSwapsResource;
    /**
     * An instance of {@link AdminShippingProfilesResource} used to send requests to [Admin Shipping Profile API Routes](https://docs.medusajs.com/api/admin#shipping-profiles).
     */
    shippingProfiles: AdminShippingProfilesResource;
    /**
     * An instance of {@link AdminStockLocationsResource} used to send requests to [Admin Stock Location API Routes](https://docs.medusajs.com/api/admin#stock-locations).
     */
    stockLocations: AdminStockLocationsResource;
    /**
     * An instance of {@link AdminStoresResource} used to send requests to [Admin Store API Routes](https://docs.medusajs.com/api/admin#store).
     */
    store: AdminStoresResource;
    /**
     * An instance of {@link AdminShippingOptionsResource} used to send requests to [Admin Shipping Option API Routes](https://docs.medusajs.com/api/admin#shipping-options).
     */
    shippingOptions: AdminShippingOptionsResource;
    /**
     * An instance of {@link AdminRegionsResource} used to send requests to [Admin Region API Routes](https://docs.medusajs.com/api/admin#regions).
     */
    regions: AdminRegionsResource;
    /**
     * An instance of {@link AdminReservationsResource} used to send requests to [Admin Reservation API Routes](https://docs.medusajs.com/api/admin#reservations).
     */
    reservations: AdminReservationsResource;
    /**
     * An instance of {@link AdminNotificationsResource} used to send requests to [Admin Notification API Routes](https://docs.medusajs.com/api/admin#notifications).
     */
    notifications: AdminNotificationsResource;
    /**
     * An instance of {@link AdminTaxRatesResource} used to send requests to [Admin Tax Rate API Routes](https://docs.medusajs.com/api/admin#tax-rates).
     */
    taxRates: AdminTaxRatesResource;
    /**
     * An instance of {@link AdminUploadsResource} used to send requests to [Admin Upload API Routes](https://docs.medusajs.com/api/admin#uploads).
     */
    uploads: AdminUploadsResource;
    /**
     * An instance of {@link AdminPaymentCollectionsResource} used to send requests to [Admin Payment Collection API Routes](https://docs.medusajs.com/api/admin#payment-collections).
     */
    paymentCollections: AdminPaymentCollectionsResource;
    /**
     * An instance of {@link AdminPaymentsResource} used to send requests to [Admin Payment API Routes](https://docs.medusajs.com/api/admin#payments).
     */
    payments: AdminPaymentsResource;
    /**
     * An instance of {@link AdminProductCategoriesResource} used to send requests to [Admin Product Category API Routes](https://docs.medusajs.com/api/admin#product-categories).
     */
    productCategories: AdminProductCategoriesResource;
    /**
     * An instance of {@link AdminCustomResource} used to send requests to custom API Routes.
     */
    custom: AdminCustomResource;
}

declare class Medusa {
    client: Client;
    admin: Admin;
    auth: AuthResource;
    carts: CartsResource;
    customers: CustomerResource;
    errors: MedusaError;
    orders: OrdersResource;
    orderEdits: OrderEditsResource;
    products: ProductsResource;
    productTypes: ProductTypesResource;
    regions: RegionsResource;
    returnReasons: ReturnReasonsResource;
    returns: ReturnsResource;
    shippingOptions: ShippingOptionsResource;
    swaps: SwapsResource;
    collections: CollectionsResource;
    giftCards: GiftCardsResource;
    paymentMethods: PaymentMethodsResource;
    paymentCollections: PaymentCollectionsResource;
    productTags: ProductTagsResource;
    productCategories: ProductCategoriesResource;
    constructor(config: Config);
    /**
     * Set a PublishableApiKey that will be sent with each request
     * to define the scope of available resources.
     *
     * @param key - PublishableApiKey identifier
     */
    setPublishableKey(key: string): void;
}

export { AddressesResource, Admin, AdminAuthResource, AdminBatchJobsResource, AdminCollectionsResource, AdminCreateUploadPayload, AdminCreateUserPayload, AdminCurrenciesResource, AdminCustomResource, AdminCustomerGroupsResource, AdminCustomersResource, AdminDiscountsResource, AdminDraftOrdersResource, AdminGiftCardsResource, AdminInventoryItemsResource, AdminInvitesResource, AdminNotesResource, AdminNotificationsResource, AdminOrderEditsResource, AdminOrdersResource, AdminPaymentCollectionsResource, AdminPaymentsResource, AdminPostInvitesPayload, AdminPriceListResource, AdminProductCategoriesResource, AdminProductTagsResource, AdminProductTypesResource, AdminProductsResource, AdminPublishableApiKeyResource, AdminRegionsResource, AdminReservationsResource, AdminReturnReasonsResource, AdminReturnsResource, AdminSalesChannelsResource, AdminShippingOptionsResource, AdminShippingProfilesResource, AdminStockLocationsResource, AdminStoresResource, AdminSwapsResource, AdminTaxRatesResource, AdminUpdateUserPayload, AdminUploadsResource, AdminUsersResource, AdminVariantsResource, AuthResource, BaseResource, CartsResource, Client, CollectionsResource, Config, CreateUserRoles, CustomerResource as CustomersResource, GiftCardsResource, HTTPResponse, InviteUserRolesEnum, _default$1 as KeyManager, LineItemsResource, MedusaError, OrderEditsResource, OrdersResource, PaymentCollectionsResource, PaymentMethodsResource, ProductCategoriesResource, ProductTagsResource, ProductTypesResource, ProductVariantsResource, ProductsResource, RegionsResource, RequestOptions, Response, ResponsePromise, ReturnReasonsResource, ReturnsResource, ShippingOptionsResource, SwapsResource, UpdateUserRoles, Medusa as default, _default as jwtTokenManager };
